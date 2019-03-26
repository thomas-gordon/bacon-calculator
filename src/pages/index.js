import React, { useState, useEffect, Fragment } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Formik, Form, Field} from 'formik'
import CustomField from '../components/formField';
import Output from '../components/Output';
import Footer from '../components/footer';


const standardValues = {
	nitrite: 0.24,
	salt: 2.2,
	sugar: 0.8
}

const ruhlmanValues = {
	nitrite: 0.22,
	salt: 2.5,
	sugar: 1.41
}

const initialSet = Object.assign(standardValues, {weight: 0})

const IndexPage = () => {

	const [dataSource, setDataSource] = useState('standard');

	useEffect(() => {
		console.log('new dataSource is', dataSource);
	});


	const updateData = ((setValues,source, values) => {
		console.log('update run', source, values.weight);
		if (source === 'ruhlman') {
			setValues(Object.assign(ruhlmanValues, {weight:values.weight}));

		} else if (source === 'standard') {


			setValues(Object.assign(standardValues, {weight:values.weight}));
		}


		setDataSource(source)
	})

	return (
	<Layout>
			<SEO title="Bacon Calculator" keywords={[`bacon`, `calculator`, `weight`, `nitrate`]} />
			<p>Hi, I've set up some sensible defaults</p>
			<Formik
				initialValues={initialSet}
				validate={values => {
					// let errors = {};
					// if (!values.email) {
					//   errors.email = 'Required';
					// } else if (
					//   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					// ) {
					//   errors.email = 'Invalid email address';
					// }
					// return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, errors, values, setValues }) => {
					return (
						<Fragment>
						<button onClick={() => updateData(setValues, 'standard', values)}>Standard</button>
						<button onClick={() => updateData(setValues, 'ruhlman', values)}>Ruhlman</button>
						<button onClick={() => updateData(setValues, 'custom', values)}>Custom (to enable fields)</button>
						<Form style={{textAlign:'center'}}>

							<Field
								component={CustomField}
								name="weight"
								errors={errors}
								id="weight"
								type="number"
								placeholder="in grams"
								label="Boneless, Rindless Pork Belly (grams)"
							/>

							<Field
								readOnly={dataSource !== 'custom' ? true : false}
								component={CustomField}
								name="nitrite"
								errors={errors}
								placeholder="percent"
								id="nitrite"
								type="number"
								label="Prague Powder No #1 (%) (6-6.25% Sodium Nitrite)"
							/>

							<Field
								readOnly={dataSource !== 'custom' ? true : false}
								component={CustomField}
								name="salt"
								errors={errors}
								placeholder="percent"
								id="salt"
								type="number"
								label="Salt (%)"
							/>

							<Field
								readOnly={dataSource !== 'custom' ? true : false}
								component={CustomField}
								name="sugar"
								errors={errors}
								placeholder="percent"
								id="sugar"
								type="number"
								label="Brown Sugar (%)"
							/>

							<Output values={values} />

						</Form>
					</Fragment>
				)}}
			</Formik>
			<Footer><a href="//tomgordon.me" target="_blank"><span role="img" aria-label="pig emoji">🐷</span> tom made this <span role="img" aria-label="pig emoji">🐷</span></a></Footer>
		</Layout>
	)
}


export default IndexPage
