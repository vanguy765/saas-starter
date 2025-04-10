import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"
import { ProductCategory } from "./ProductCategory.js"

@Entity<TenantProductCategory>("tenant_product_categories", {
  allowApiCrud: true,
  id: ["tenant_id", "product_category_id"],
})
export class TenantProductCategory {
  @Fields.uuid()
  tenant_id!: string

  @Relations.toOne(() => Tenant, { field: "tenant_id" })
  tenant!: Tenant

  @Fields.uuid()
  product_category_id!: string

  @Relations.toOne(() => ProductCategory, { field: "product_category_id" })
  product_category!: ProductCategory

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date
}
