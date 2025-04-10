import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { ProductType } from "./ProductType.js"
import { TenantProductCategory } from "./TenantProductCategory.js"
import { Tenant } from "./Tenant.js"
import { Industry } from "./Industry.js"

@Entity<ProductCategory>("product_categories", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class ProductCategory {
  @Fields.uuid()
  id = ""

  @Fields.uuid()
  industry_id!: string

  @Relations.toOne(() => Industry, { field: "industry_id" })
  industry!: Industry

  @Fields.string()
  name!: string

  @Fields.string()
  description!: string

  @Fields.string({ allowNull: true })
  product_category_ref_id?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.string()
  tenant_ident!: string

  @Relations.toOne(() => Tenant, { field: "tenant_ident" })
  tenantTenantIdent!: Tenant

  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  // Relations toMany
  @Relations.toMany(() => ProductType)
  product_types?: ProductType[]

  @Relations.toMany(() => TenantProductCategory)
  tenant_product_categories?: TenantProductCategory[]
}
