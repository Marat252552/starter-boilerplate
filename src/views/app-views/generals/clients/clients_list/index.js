import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, UserOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import { GetUsersAPI } from 'api/Intanse';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class UserList extends Component {

	state = {
		users: undefined,
		userProfileVisible: false,
		selectedUser: null,
		loading: true
	}

	componentDidMount() {
		let fetchUsers = async () => {
			try {
				let response = await GetUsersAPI()
				this.setState({
					users: response.data,
					loading: false
				})
			} catch (e) {
				console.log(e)
			}
		}
		fetchUsers()
	}



	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
		});
	}

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} icon={<UserOutlined />} name={record.name} subTitle={record.email} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (value) => {
					return value.name
				},
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Phone number',
				dataIndex: 'phone',
				sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
			},
			{
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
						</Tooltip>
						<Tooltip title="Edit">
							<Link to={`${this.props.match.url}/${elm.id}`}>
								<Button icon={<EditOutlined />} size="small" />
							</Link>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{ 'padding': '0px' }}>
				<Table loading={this.state.loading} columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={() => { this.closeUserProfile() }} />
			</Card>
		)
	}
}

export default UserList
