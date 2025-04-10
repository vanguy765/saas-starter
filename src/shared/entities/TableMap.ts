import { Entity, Field, Fields } from "remult"
import { Relations } from "remult"
import { Tenant } from "./Tenant.js"

@Entity<TableMap>("table_maps", {
  allowApiCrud: true,
})
export class TableMap {
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

  @Fields.json({ allowNull: true })
  products? = {}

  @Fields.json({ allowNull: true })
  industries? = {}

  @Fields.json({ allowNull: true })
  customers? = {}

  @Fields.json({ allowNull: true })
  order_items? = {}

  @Fields.json({ allowNull: true })
  product_types? = {}

  @Fields.json({ allowNull: true })
  product_categories? = {}

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  @Fields.boolean({ allowNull: true })
  is_active?: boolean
}
