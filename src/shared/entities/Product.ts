import { Entity, Field, Fields, Validators } from "remult"
import { Relations } from "remult"
import { OrderItem } from "./OrderItem.js"
import { ProductSpecial } from "./ProductSpecial.js"
import { Tenant } from "./Tenant.js"
import { ProductType } from "./ProductType.js"

@Entity<Product>("products", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class Product {
  @Fields.uuid()
  id = ""

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid({ validate: [Validators.unique] })
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.string()
  name!: string

  @Fields.uuid()
  product_type_id!: string

  @Relations.toOne(() => ProductType, { field: "product_type_id" })
  product_type!: ProductType

  @Fields.string({ allowNull: true })
  description?: string

  @Fields.string({ allowNull: true })
  size?: string

  @Fields.number()
  price!: number

  @Fields.string({ validate: [Validators.unique], allowNull: true })
  sku?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.string()
  product_ref_id!: string

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  // Relations toMany
  @Relations.toMany(() => OrderItem)
  order_items?: OrderItem[]

  @Relations.toMany(() => ProductSpecial)
  product_specials?: ProductSpecial[]
}
