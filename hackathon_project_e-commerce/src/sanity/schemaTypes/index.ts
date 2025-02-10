import { type SchemaTypeDefinition } from 'sanity'
import product from './products'
import { contact } from './contact'
import { userRegister } from './userRegister'
import { userLogin } from './userLogin'
import { cartSchema } from './Cart'
import { billingDetail } from './billingDetail'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,cartSchema,billingDetail,contact,userRegister,userLogin],
}
