import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Formik, Form, Field} from 'formik'
import CustomField from '../components/formField';
import Output from '../components/Output';

const IndexPage = () => {
	const [dataSource, setDataSource] = useState('standard');

	useEffect(() => {
		console.log('new dataSource is', dataSource);
	});

	return (
	<Layout>
			<SEO title="Bacon Calculator" keywords={[`bacon`, `calculator`, `weight`, `nitrate`]} />
			<p>Hi, I've set up some sensible defaults</p>

			<button onClick={() => setDataSource('standard')}>Standard</button>
			<button onClick={() => setDataSource('ruhlman')}>Ruhlman</button>
			<button onClick={() => setDataSource('custom')}>Custom (to enable fields)</button>

			<br />
			<Formik
				initialValues={{
					weight: 0,
					nitrite: 0.22,
					salt: 2.35,
					sugar: 1
				}}
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
				{({ isSubmitting, errors, values }) => {

					return (

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
				)}}
			</Formik>
		</Layout>
	)
}


export default IndexPage
