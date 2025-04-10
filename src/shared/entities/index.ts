import { Agent } from './Agent.js';
import { AccessPhone } from './AccessPhone.js';
import { AccessSlug } from './AccessSlug.js';
import { Tenant } from './Tenant.js';
import { CallLog } from './CallLog.js';
import { CallTranscription } from './CallTranscription.js';
import { Order } from './Order.js';
import { OrderItem } from './OrderItem.js';
import { Product } from './Product.js';
import { ProductSpecial } from './ProductSpecial.js';
import { ProductType } from './ProductType.js';
import { ProductCategory } from './ProductCategory.js';
import { TenantProductCategory } from './TenantProductCategory.js';
import { Industry } from './Industry.js';
import { Customer } from './Customer.js';
import { UserEvent } from './UserEvent.js';
import { UserPreference } from './UserPreference.js';
import { TableMap } from './TableMap.js';
import { UserRole } from './UserRole.js';
import { Role } from './Role.js';

export const entities = [AccessPhone, AccessSlug, Agent, CallLog, CallTranscription, Customer, Industry, Order, OrderItem, Product, ProductCategory, ProductSpecial, ProductType, Role, TableMap, Tenant, TenantProductCategory, UserEvent, UserPreference, UserRole];