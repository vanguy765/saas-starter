import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Product } from "./Product.js"
import { Tenant } from "./Tenant.js"
import { ProductCategory } from "./ProductCategory.js"

@Entity<ProductType>("product_types", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class ProductType {
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

  @Fields.string({ allowNull: true })
  product_type_ref_id?: string

  @Fields.uuid({ allowNull: true })
  product_category_id?: string

  @Relations.toOne(() => ProductCategory, { field: "product_category_id" })
  product_category?: ProductCategory

  @Fields.string()
  name!: string

  @Fields.string()
  description!: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  // Relations toMany
  @Relations.toMany(() => Product)
  products?: Product[]
}
