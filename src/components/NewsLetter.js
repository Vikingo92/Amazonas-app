import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { DivForm, MsgError, MsgSuccess, Enviar, Reset } from './styles/NewsLetter.Styled';

const NewsLetter = () => {
    const [sendEmail, setSendEmail] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email('E-mail inválido').required('Es necesario un ingresar un e-mail')
        }),

        onSubmit: (values) => {
            console.log(values)
            setSendEmail(true)
            setTimeout(() => setSendEmail(false), 3000);

        },

    })

    return (
        <DivForm>
            <form onSubmit={formik.handleSubmit} >
                <h2>NewsLetter</h2>
                <h3>¿Quieres estar al tanto de las últimas novedades?</h3>
                <label htmlFor='email'></label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.email}
                    placeholder='Ingrese su email'

                />
                <div>
                    <Enviar type='submit' disabled={!formik.isValid || !formik.dirty}>Enviar</Enviar>
                    <Reset type='reset'>Reset</Reset>
                </div>
                {formik.touched.email && formik.errors.email ? <MsgError>{formik.errors.email}</MsgError> : null}
                {sendEmail && <MsgSuccess>E-mail enviado con éxito!</MsgSuccess>}
            </form>
        </DivForm>
    )
}

export default NewsLetter