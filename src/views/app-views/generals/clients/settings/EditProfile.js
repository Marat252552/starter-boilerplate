import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { GetUserAPI } from 'api/Intanse';
import Loading from 'components/shared-components/Loading';


export class EditProfile extends Component {

	avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

	state = {
		user: {
			avatarUrl: undefined,
			email: undefined,
			name: undefined,
			username: undefined,
			phone: undefined,
			website: undefined,
			address: undefined,
		},
		loading: true
	}

	componentDidMount() {
		this.fetchUser()
	}
	goBack() {
		this.props.history.goBack()
	}
	async fetchUser() {
		try {
			let { data } = await GetUserAPI(this.props.id)
			let { name, email, username, website, phone, address } = data
			this.setState({
				user: {
					name, email, username, website, phone, address
				}
			})
		} catch (e) {
			console.log(e)
		} finally {
			this.setState({
				loading: false
			})
		}
	}

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {

		const onFinish = values => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				this.setState({
					name: values.name,
					email: values.email,
					userName: values.userName,
					dateOfBirth: values.dateOfBirth,
					phoneNumber: values.phoneNumber,
					website: values.website,
					address: values.address,
					city: values.city,
					postcode: values.postcode,
				})
				message.success({ content: 'Done!', key, duration: 2 });
				this.goBack()
			}, 1000);
		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		const onUploadAavater = info => {
			const key = 'updatable';
			if (info.file.status === 'uploading') {
				message.loading({ content: 'Uploading...', key, duration: 1000 });
				return;
			}
			if (info.file.status === 'done') {
				this.getBase64(info.file.originFileObj, imageUrl =>
					this.setState({
						avatarUrl: imageUrl,
					}),
				);
				message.success({ content: 'Uploaded!', key, duration: 1.5 });
			}
		};

		const onRemoveAvater = () => {
			this.setState({
				avatarUrl: ''
			})
		}

		const { name, email, username, phone, website, address, avatarUrl } = this.state.user;

		if (this.state.loading) return <Loading />

		return (
			<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
					<div className="ml-md-3 mt-md-0 mt-3">
						<Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
							<Button type="primary">Change Avatar</Button>
						</Upload>
						<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
					</div>
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{
								'name': name,
								'email': email,
								'username': username,
								'phone': phone,
								'website': website,
								'address': address.street,
								'city': address.city,
								'postcode': address.zipcode
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{
												required: true,
												type: 'email',
												message: 'Please enter a valid email!'
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phone"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

export default EditProfile
