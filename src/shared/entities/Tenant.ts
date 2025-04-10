import { Entity, Fields, Validators } from "remult"
import { Relations } from "remult"
import { AccessPhone } from "./AccessPhone.js"
import { AccessSlug } from "./AccessSlug.js"
import { Agent } from "./Agent.js"
import { CallLog } from "./CallLog.js"
import { CallTranscription } from "./CallTranscription.js"
import { Customer } from "./Customer.js"
import { Order } from "./Order.js"
import { ProductCategory } from "./ProductCategory.js"
import { ProductSpecial } from "./ProductSpecial.js"
import { ProductType } from "./ProductType.js"
import { Product } from "./Product.js"
import { TableMap } from "./TableMap.js"
import { TenantProductCategory } from "./TenantProductCategory.js"
import { UserRole } from "./UserRole.js"

@Entity<Tenant>("tenants", {
  allowApiCrud: true,
  defaultOrderBy: { name: "asc" },
})
export class Tenant {
  @Fields.uuid()
  id = ""

  @Fields.string({ validate: [Validators.unique] })
  tenant_ident!: string

  @Fields.string()
  name!: string

  @Fields.string({ allowNull: true })
  address?: string

  @Fields.string({ allowNull: true })
  phone?: string

  @Fields.string({ allowNull: true })
  domain?: string

  @Fields.uuid({ allowNull: true })
  industry_id?: string

  @Fields.boolean({ allowNull: true })
  is_active? = true

  @Fields.string({ allowNull: true })
  resource_folder?: string

  @Fields.createdAt({ allowNull: true })
  created_at? = new Date()

  @Fields.updatedAt({ allowNull: true })
  updated_at?: Date

  // Relations toMany
  @Relations.toMany(() => AccessPhone, { field: "tenant_ident" })
  access_phonesOftenantTenantIdent?: AccessPhone[]

  @Relations.toMany(() => AccessPhone, { field: "tenant_id" })
  access_phonesOftenant?: AccessPhone[]

  @Relations.toMany(() => AccessSlug, { field: "tenant_ident" })
  access_slugsOftenantTenantIdent?: AccessSlug[]

  @Relations.toMany(() => AccessSlug, { field: "tenant_id" })
  access_slugsOftenant?: AccessSlug[]

  @Relations.toMany(() => Agent, { field: "tenant_ident" })
  agentsOftenantTenantIdent?: Agent[]

  @Relations.toMany(() => Agent, { field: "tenant_id" })
  agentsOftenant?: Agent[]

  @Relations.toMany(() => CallLog)
  call_logs?: CallLog[]

  @Relations.toMany(() => CallTranscription, { field: "tenant_ident" })
  call_transcriptionsOftenantTenantIdent?: CallTranscription[]

  @Relations.toMany(() => CallTranscription, { field: "tenant_id" })
  call_transcriptionsOftenant?: CallTranscription[]

  @Relations.toMany(() => Customer, { field: "tenant_ident" })
  customersOftenantTenantIdent?: Customer[]

  @Relations.toMany(() => Customer, { field: "tenant_id" })
  customersOftenant?: Customer[]

  @Relations.toMany(() => Order, { field: "tenant_ident" })
  ordersOftenantTenantIdent?: Order[]

  @Relations.toMany(() => Order, { field: "tenant_id" })
  ordersOftenant?: Order[]

  @Relations.toMany(() => ProductCategory, { field: "tenant_ident" })
  product_categoriesOftenantTenantIdent?: ProductCategory[]

  @Relations.toMany(() => ProductCategory, { field: "tenant_id" })
  product_categoriesOftenant?: ProductCategory[]

  @Relations.toMany(() => ProductSpecial, { field: "tenant_ident" })
  product_specialsOftenantTenantIdent?: ProductSpecial[]

  @Relations.toMany(() => ProductSpecial, { field: "tenant_id" })
  product_specialsOftenant?: ProductSpecial[]

  @Relations.toMany(() => ProductType, { field: "tenant_ident" })
  product_typesOftenantTenantIdent?: ProductType[]

  @Relations.toMany(() => ProductType, { field: "tenant_id" })
  product_typesOftenant?: ProductType[]

  @Relations.toMany(() => Product, { field: "tenant_ident" })
  productsOftenantTenantIdent?: Product[]

  @Relations.toMany(() => Product, { field: "tenant_id" })
  productsOftenant?: Product[]

  @Relations.toMany(() => TableMap, { field: "tenant_ident" })
  table_mapsOftenantTenantIdent?: TableMap[]

  @Relations.toMany(() => TableMap, { field: "tenant_id" })
  table_mapsOftenant?: TableMap[]

  @Relations.toMany(() => TenantProductCategory)
  tenant_product_categories?: TenantProductCategory[]

  @Relations.toMany(() => UserRole, { field: "tenant_ident" })
  user_rolesOftenantTenantIdent?: UserRole[]

  @Relations.toMany(() => UserRole, { field: "tenant_id" })
  user_rolesOftenant?: UserRole[]
}
