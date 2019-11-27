import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
// * Styles and Ant-Design
import Logo from '../../../media/localbri-only-bri.png'
import './formProduct.component.css'
import { Form, Icon, Input, Button, message, Upload, Modal } from 'antd';
const { TextArea } = Input;
const { Dragger} = Upload;


  
function FormProduct({form, history}) {

	useEffect(() => {
    form.validateFields();
  }, []);

	const success = () => {
    message.success('Form was created sucessfuly');
	};
	
	const error = () => {
    message.error('This is an error message');
	};

	const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log('TCL: FormRifa -> values', values);
      if (!err) {
        success();
        history.push('/');
      } else {
        error();
        history.push('/error');
      }
    });
	};

	const props = {
		name: 'file',
		multiple: true,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};
	
	const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
	} = form;

	 // Only show error after a field is touched. | isFieldTouched('') && getFieldError('');
	 const titleError = isFieldTouched('formTitle') && getFieldError('formTitle');
	 const descriptionError = isFieldTouched('formDescription') && getFieldError('formDescription');
	 const uploadError = isFieldTouched('formUpload') && getFieldError('formUpload');
	 const locationError = isFieldTouched('formLocation') && getFieldError('formLocation');
	 const priceError = isFieldTouched('formPrice') && getFieldError('formPrice');
	
	return(
	<div className="form-background">
		<div className="form-container">
			<h2 className="form-title">
			
				<span role="img" aria-label="palette">
					🎨
				</span>
				Introduce los datos del producto
				<span role="img" aria-label="taco">
					🌮
				</span>
			</h2>
			<Form className="form-antd-container" onSubmit={handleSubmit}>
				<Form.Item
					className="form-antd-item"
					validateStatus={titleError ? 'error' : ''}
					help={titleError || ''}
				>
					{getFieldDecorator('formTitle', {
						rules: [
							{ required: true, message: 'Ingrese nombre del producto' }
						]
					})(
						<Input
							prefix={
								<Icon type="coffee" style={{ color: 'rgba(0,0,0,.25)' }} />
							}
							placeholder="Nombre"
						/>
					)}
				</Form.Item>

				<Form.Item
					className="form-antd-item"
					validateStatus={descriptionError ? 'error' : ''}
					help={descriptionError || ''}
				>
					{getFieldDecorator('formDescription', {
						rules: [
							{ required: true, message: 'Ingrese una descripción del articulo.' }
						]
					})(
						<TextArea
                rows={3}
                prefix={
                  <Icon type="coffee" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Descripción"
              />
					)}
				</Form.Item>

				<Form.Item
					className="form-antd-item"
					validateStatus={uploadError ? 'error' : ''}
					help={uploadError || ''}
				>
					{getFieldDecorator('formUpload', {
						rules: [
							{ required: true, message: 'Suabe al menos una imagen del articulo.' }
						]
					})(
						<Dragger {...props}>
							<p className="ant-upload-drag-icon">
								<Icon type="inbox" />
							</p>
							<p className="ant-upload-text">Haz clic aquí o arrastra tus imagenes para subirlas</p>
							<p className="ant-upload-hint">
								Sube un mínimo de 1 imagen o un máximo de 4 imagenes, por favor.
							</p>
						</Dragger>
					)}
				</Form.Item>

				<Form.Item
					className="form-antd-item"
					validateStatus={locationError ? 'error' : ''}
					help={locationError || ''}
				>
					{getFieldDecorator('formLocation', {
						rules: [
							{ required: true, message: 'Ingrese su locación o punto de venta' }
						]
					})(
						<Input
							prefix={
								<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />
							}
							placeholder="Locación"
						/>
					)}
				</Form.Item>

				<Form.Item
					className="form-antd-item"
					validateStatus={priceError ? 'error' : ''}
					help={priceError || ''}
				>
					{getFieldDecorator('formPrice', {
						rules: [
							{ required: true, message: 'Ingrese la cantidad de costo del articulo' }
						]
					})(
						<Input
							prefix={
								<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />
							}
							placeholder="Precio"
						/>
					)}
				</Form.Item>
				
					<Link to='/'>
						<Button className='gallery-menu-btn' type='primary' icon="tag">
							Agregar
						</Button>
					</Link>

			</Form>
		</div>
	</div>
		
	)
}

export default Form.create({name:'normal_form'})(FormProduct);