import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"
import { Product } from "./Product.js"

@Entity<ProductSpecial>("product_specials", {
  allowApiCrud: true,
})
export class ProductSpecial {
  @Fields.uuid()
  id = ""

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.uuid()
  product_id!: string

  @Relations.toOne(() => Product, { field: "product_id" })
  product!: Product

  @Fields.date()
  startdate!: Date

  @Fields.date()
  enddate!: Date

  @Fields.number()
  specialprice!: number

  @Fields.number({ allowNull: true })
  discount?: number

  @Fields.string({ allowNull: true })
  product_special_ref_id?: string

  @Fields.string()
  product_ref_id!: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
