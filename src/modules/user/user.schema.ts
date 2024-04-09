import { z } from 'zod';
const createUserSchema = z.object({
 email:z.string({
  required_error: 'Email is required',
  invalid_type_error: 'Email must be a string',
 }).email('Email must be valid'),
})