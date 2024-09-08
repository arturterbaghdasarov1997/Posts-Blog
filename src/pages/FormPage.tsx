import React from 'react';
import { Form, json, redirect } from 'react-router-dom';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return json({ error: 'All fields are required.' }, { status: 400 });
  }

  console.log({ email, password });

  return redirect('/success');
};

const FormPage: React.FC = () => {
  return (
    <Form method='POST' action='/form-page'>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" name='email' id='email' required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' required />
      </div>
      <button type='submit'>Submit</button>
    </Form>
  );
};

export default FormPage;