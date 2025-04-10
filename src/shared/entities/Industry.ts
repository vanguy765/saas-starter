import { Entity, Fields } from "remult"
import { Relations } from "remult"
import { Agent } from "./Agent.js"
import { Customer } from "./Customer.js"
import { ProductCategory } from "./ProductCategory.js"

@Entity<Industry>("industries", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class Industry {
  @Fields.uuid()
  id = ""

  @Fields.string()
  name!: string

  @Fields.string()
  resource_folder!: string

  @Fields.string({ allowNull: true })
  description?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.string()
  tenant_ident!: string

  @Fields.uuid()
  tenant_id!: string

  // Relations toMany
  @Relations.toMany(() => Agent)
  agents?: Agent[]

  @Relations.toMany(() => Customer)
  customers?: Customer[]

  @Relations.toMany(() => ProductCategory)
  product_categories?: ProductCategory[]
}
