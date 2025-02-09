import { type SchemaTypeDefinition } from 'sanity'
import product from './products'
import { contact } from './contact'
import { userRegister } from './userRegister'
import { userLogin } from './userLogin'
import { cartSchema } from './Cart'
import { billing } from './billing'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,cartSchema,contact,userRegister,userLogin,billing],
}
