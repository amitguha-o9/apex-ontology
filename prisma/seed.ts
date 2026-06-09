// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding APEX ontology v1.1.0…');

  const model_0 = await prisma.ontologyModel.upsert({
    where: { name: 'Business Model' },
    update: {},
    create: { name: 'Business Model', color: '#3B82F6', sortOrder: 0 },
  });
  const sub_0_0 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Customer Model' } },
    update: {},
    create: { name: 'Customer Model', modelId: model_0.id, sortOrder: 0 },
  });
  const ent_0_0_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_0.id, name: `Enterprise Customer` } },
    update: {},
    create: {
      name: `Enterprise Customer`,
      description: `=VLOOKUP(D2, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_0.id,
      relationships: [{"name":"maps to","target":"Planning Account","cardinality":"M:1","type":"Association","description":"An Enterprise Customer maps to a Planning Account for demand and revenue planning"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-0` },
    update: {},
    create: {
      id: `seed-0-0-0-0`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Unique identifier for the customer',
      sortOrder: 0, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-1` },
    update: {},
    create: {
      id: `seed-0-0-0-1`,
      name: 'customer_name', type: 'String',
      required: true, description: 'Name of the customer',
      sortOrder: 1, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-2` },
    update: {},
    create: {
      id: `seed-0-0-0-2`,
      name: 'customer_role', type: 'Enum(SoldTo|ShipTo|BillTo|Payer)',
      required: true, description: 'Role of the customer in the sales process',
      sortOrder: 2, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-3` },
    update: {},
    create: {
      id: `seed-0-0-0-3`,
      name: 'parent_customer_id', type: 'String',
      required: false, description: 'True in the case of ship tos that need to point to the Sold To, and similar cases',
      sortOrder: 3, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-4` },
    update: {},
    create: {
      id: `seed-0-0-0-4`,
      name: 'address', type: 'PhysicalAddress',
      required: false, description: 'Physical location of the customer. Used to map to the Sales Market Region',
      sortOrder: 4, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-5` },
    update: {},
    create: {
      id: `seed-0-0-0-5`,
      name: 'credit_limit', type: 'Decimal',
      required: false, description: 'Approved credit limit for the customer',
      sortOrder: 5, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-6` },
    update: {},
    create: {
      id: `seed-0-0-0-6`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Default transaction currency for the customer',
      sortOrder: 6, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-7` },
    update: {},
    create: {
      id: `seed-0-0-0-7`,
      name: 'payment_terms', type: 'String',
      required: false, description: 'Standard payment terms agreed with the customer',
      sortOrder: 7, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-8` },
    update: {},
    create: {
      id: `seed-0-0-0-8`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the customer is active',
      sortOrder: 8, entityId: ent_0_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-0-9` },
    update: {},
    create: {
      id: `seed-0-0-0-9`,
      name: 'customer_type', type: 'Enum(Retailer|Distributor|Manufacturer|Government|NonProfit)',
      required: true, description: 'Type classification of the customer',
      sortOrder: 9, entityId: ent_0_0_0.id,
    },
  });
  const ent_0_0_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_0.id, name: `Individual Customer` } },
    update: {},
    create: {
      name: `Individual Customer`,
      description: `=VLOOKUP(D3, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_0.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-1-0` },
    update: {},
    create: {
      id: `seed-0-0-1-0`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Unique identifier for the customer',
      sortOrder: 0, entityId: ent_0_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-1-1` },
    update: {},
    create: {
      id: `seed-0-0-1-1`,
      name: 'customer_name', type: 'String',
      required: true, description: 'Name of the customer',
      sortOrder: 1, entityId: ent_0_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-1-2` },
    update: {},
    create: {
      id: `seed-0-0-1-2`,
      name: 'loyalty_id', type: 'String',
      required: false, description: 'Loyalty number or code of the customer',
      sortOrder: 2, entityId: ent_0_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-1-3` },
    update: {},
    create: {
      id: `seed-0-0-1-3`,
      name: 'parent_customer_id', type: 'String',
      required: false, description: 'True in the case of ship tos that need to point to the Sold To, and similar cases',
      sortOrder: 3, entityId: ent_0_0_1.id,
    },
  });
  const ent_0_0_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_0.id, name: `Planning Account` } },
    update: {},
    create: {
      name: `Planning Account`,
      description: `=VLOOKUP(D4, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_0.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-2-0` },
    update: {},
    create: {
      id: `seed-0-0-2-0`,
      name: 'account_id', type: 'String',
      required: true, description: 'Unique identifier for the account',
      sortOrder: 0, entityId: ent_0_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-2-1` },
    update: {},
    create: {
      id: `seed-0-0-2-1`,
      name: 'account_name', type: 'String',
      required: true, description: 'Name of the planning account',
      sortOrder: 1, entityId: ent_0_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-2-2` },
    update: {},
    create: {
      id: `seed-0-0-2-2`,
      name: 'account_type', type: 'Enum(Retailer|Distributor|Manufacturer|Government|NonProfit)',
      required: true, description: 'Derived from the customer mapped',
      sortOrder: 2, entityId: ent_0_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-2-3` },
    update: {},
    create: {
      id: `seed-0-0-2-3`,
      name: 'sales_org_id', type: 'String',
      required: false, description: 'Sales organisation responsible for this account',
      sortOrder: 3, entityId: ent_0_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-2-4` },
    update: {},
    create: {
      id: `seed-0-0-2-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the account is active for planning',
      sortOrder: 4, entityId: ent_0_0_2.id,
    },
  });
  const ent_0_0_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_0.id, name: `Planning Account Customer Map` } },
    update: {},
    create: {
      name: `Planning Account Customer Map`,
      description: `=VLOOKUP(D5, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_0.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-3-0` },
    update: {},
    create: {
      id: `seed-0-0-3-0`,
      name: 'account_id', type: 'String',
      required: true, description: 'Unique identifier for the account',
      sortOrder: 0, entityId: ent_0_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-3-1` },
    update: {},
    create: {
      id: `seed-0-0-3-1`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Unique identifier for the customer',
      sortOrder: 1, entityId: ent_0_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-0-3-2` },
    update: {},
    create: {
      id: `seed-0-0-3-2`,
      name: 'is_root', type: 'Enum(Customer|Channel|Region|National)',
      required: false, description: 'If there is a root customer that maps 1:1 to the planning account',
      sortOrder: 2, entityId: ent_0_0_3.id,
    },
  });
  const sub_0_1 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Demand Model' } },
    update: {},
    create: { name: 'Demand Model', modelId: model_0.id, sortOrder: 1 },
  });
  const ent_0_1_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_1.id, name: `Demand` } },
    update: {},
    create: {
      name: `Demand`,
      description: `=VLOOKUP(D6, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_1.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Demand record refers to a specific Item"},{"name":"at location","target":"Location","cardinality":"M:1","type":"Association","description":"A Demand record is for a specific Location"},{"name":"for account","target":"Planning Account","cardinality":"M:1","type":"Association","description":"A Demand record is associated with an Account"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-0` },
    update: {},
    create: {
      id: `seed-0-1-0-0`,
      name: 'demand_id', type: 'String',
      required: true, description: 'Unique identifier for the demand record',
      sortOrder: 0, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-1` },
    update: {},
    create: {
      id: `seed-0-1-0-1`,
      name: 'demand_type', type: 'Enum(Forecast|ActualOrder|Opportunity|CustomerForecast|Statistical)',
      required: true, description: 'Type of demand record',
      sortOrder: 1, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-2` },
    update: {},
    create: {
      id: `seed-0-1-0-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item to which this demand applies',
      sortOrder: 2, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-3` },
    update: {},
    create: {
      id: `seed-0-1-0-3`,
      name: 'location_id', type: 'String',
      required: true, description: 'Location for which demand is recorded',
      sortOrder: 3, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-4` },
    update: {},
    create: {
      id: `seed-0-1-0-4`,
      name: 'account_id', type: 'String',
      required: false, description: 'Account associated with this demand',
      sortOrder: 4, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-5` },
    update: {},
    create: {
      id: `seed-0-1-0-5`,
      name: 'period', type: 'Date',
      required: true, description: 'Planning period of the demand',
      sortOrder: 5, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-6` },
    update: {},
    create: {
      id: `seed-0-1-0-6`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Demand quantity',
      sortOrder: 6, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-7` },
    update: {},
    create: {
      id: `seed-0-1-0-7`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure for the quantity',
      sortOrder: 7, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-8` },
    update: {},
    create: {
      id: `seed-0-1-0-8`,
      name: 'value', type: 'Decimal',
      required: false, description: 'Monetary value of the demand',
      sortOrder: 8, entityId: ent_0_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-0-9` },
    update: {},
    create: {
      id: `seed-0-1-0-9`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Currency for the monetary value',
      sortOrder: 9, entityId: ent_0_1_0.id,
    },
  });
  const ent_0_1_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_1.id, name: `Opportunity` } },
    update: {},
    create: {
      name: `Opportunity`,
      description: `=VLOOKUP(D7, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_1.id,
      relationships: [{"name":"extends","target":"Demand","cardinality":"1:1","type":"Inheritance","description":"Opportunity is a specialisation of Demand"},{"name":"in stage","target":"Opportunity Stage","cardinality":"M:1","type":"Association","description":"An Opportunity is at a specific pipeline Stage"},{"name":"for customer","target":"Enterprise Customer","cardinality":"M:1","type":"Association","description":"An Opportunity is associated with a Customer"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-0` },
    update: {},
    create: {
      id: `seed-0-1-1-0`,
      name: 'demand_id', type: 'String',
      required: true, description: 'FK to parent Demand record',
      sortOrder: 0, entityId: ent_0_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-1` },
    update: {},
    create: {
      id: `seed-0-1-1-1`,
      name: 'opportunity_name', type: 'String',
      required: true, description: 'Name of the opportunity',
      sortOrder: 1, entityId: ent_0_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-2` },
    update: {},
    create: {
      id: `seed-0-1-1-2`,
      name: 'customer_id', type: 'String',
      required: false, description: 'Customer associated with the opportunity',
      sortOrder: 2, entityId: ent_0_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-3` },
    update: {},
    create: {
      id: `seed-0-1-1-3`,
      name: 'close_probability', type: 'Decimal',
      required: false, description: 'Estimated probability of closing (0-100%)',
      sortOrder: 3, entityId: ent_0_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-4` },
    update: {},
    create: {
      id: `seed-0-1-1-4`,
      name: 'expected_close_date', type: 'Date',
      required: false, description: 'Expected date of closing the opportunity',
      sortOrder: 4, entityId: ent_0_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-1-5` },
    update: {},
    create: {
      id: `seed-0-1-1-5`,
      name: 'stage_id', type: 'String',
      required: false, description: 'Current pipeline stage of the opportunity',
      sortOrder: 5, entityId: ent_0_1_1.id,
    },
  });
  const ent_0_1_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_1.id, name: `Opportunity Line Item` } },
    update: {},
    create: {
      name: `Opportunity Line Item`,
      description: `=VLOOKUP(D8, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_1.id,
      relationships: [{"name":"belongs to","target":"Opportunity","cardinality":"M:1","type":"Association","description":"An Opportunity Line Item is a line within an Opportunity"},{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"An Opportunity Line Item refers to an Item"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-0` },
    update: {},
    create: {
      id: `seed-0-1-2-0`,
      name: 'line_item_id', type: 'String',
      required: true, description: 'Unique identifier for the line item',
      sortOrder: 0, entityId: ent_0_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-1` },
    update: {},
    create: {
      id: `seed-0-1-2-1`,
      name: 'opportunity_id', type: 'String',
      required: true, description: 'Opportunity this line belongs to',
      sortOrder: 1, entityId: ent_0_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-2` },
    update: {},
    create: {
      id: `seed-0-1-2-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being offered',
      sortOrder: 2, entityId: ent_0_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-3` },
    update: {},
    create: {
      id: `seed-0-1-2-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Proposed quantity',
      sortOrder: 3, entityId: ent_0_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-4` },
    update: {},
    create: {
      id: `seed-0-1-2-4`,
      name: 'unit_price', type: 'Decimal',
      required: false, description: 'Proposed unit price',
      sortOrder: 4, entityId: ent_0_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-2-5` },
    update: {},
    create: {
      id: `seed-0-1-2-5`,
      name: 'discount', type: 'Decimal',
      required: false, description: 'Proposed discount percentage',
      sortOrder: 5, entityId: ent_0_1_2.id,
    },
  });
  const ent_0_1_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_1.id, name: `Opportunity Stage` } },
    update: {},
    create: {
      name: `Opportunity Stage`,
      description: `=VLOOKUP(D9, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_1.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-3-0` },
    update: {},
    create: {
      id: `seed-0-1-3-0`,
      name: 'stage_id', type: 'String',
      required: true, description: 'Unique identifier for the stage',
      sortOrder: 0, entityId: ent_0_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-3-1` },
    update: {},
    create: {
      id: `seed-0-1-3-1`,
      name: 'stage_name', type: 'String',
      required: true, description: 'Name of the pipeline stage',
      sortOrder: 1, entityId: ent_0_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-3-2` },
    update: {},
    create: {
      id: `seed-0-1-3-2`,
      name: 'stage_order', type: 'Integer',
      required: true, description: 'Ordinal position in the pipeline',
      sortOrder: 2, entityId: ent_0_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-1-3-3` },
    update: {},
    create: {
      id: `seed-0-1-3-3`,
      name: 'probability', type: 'Decimal',
      required: true, description: 'Default close probability for this stage',
      sortOrder: 3, entityId: ent_0_1_3.id,
    },
  });
  const sub_0_2 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Distribution Network Model' } },
    update: {},
    create: { name: 'Distribution Network Model', modelId: model_0.id, sortOrder: 2 },
  });
  const ent_0_2_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_2.id, name: `Bill of Distribution` } },
    update: {},
    create: {
      name: `Bill of Distribution`,
      description: `=VLOOKUP(D10, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_2.id,
      relationships: [{"name":"from","target":"Location","cardinality":"M:1","type":"Association","description":"BOD defines a distribution lane from a source Location"},{"name":"to","target":"Location","cardinality":"M:1","type":"Association","description":"BOD defines a distribution lane to a destination Location"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-0-0` },
    update: {},
    create: {
      id: `seed-0-2-0-0`,
      name: 'bod_id', type: 'String',
      required: true, description: 'Unique identifier for the Bill of Distribution',
      sortOrder: 0, entityId: ent_0_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-0-1` },
    update: {},
    create: {
      id: `seed-0-2-0-1`,
      name: 'from_location_id', type: 'String',
      required: true, description: 'Source/supply location',
      sortOrder: 1, entityId: ent_0_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-0-2` },
    update: {},
    create: {
      id: `seed-0-2-0-2`,
      name: 'to_location_id', type: 'String',
      required: true, description: 'Destination/demand location',
      sortOrder: 2, entityId: ent_0_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-0-3` },
    update: {},
    create: {
      id: `seed-0-2-0-3`,
      name: 'item_id', type: 'String',
      required: false, description: 'Item for which this distribution path applies (null = all items)',
      sortOrder: 3, entityId: ent_0_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-0-4` },
    update: {},
    create: {
      id: `seed-0-2-0-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this BOD is active',
      sortOrder: 4, entityId: ent_0_2_0.id,
    },
  });
  const ent_0_2_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_2.id, name: `BOD Detail` } },
    update: {},
    create: {
      name: `BOD Detail`,
      description: `=VLOOKUP(D11, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_2.id,
      relationships: [{"name":"part of","target":"Bill of Distribution","cardinality":"M:1","type":"Association","description":"A BOD Detail is a lane detail within a BOD"},{"name":"via","target":"Transport Mode","cardinality":"M:1","type":"Association","description":"A BOD Detail specifies the Transport Mode"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-0` },
    update: {},
    create: {
      id: `seed-0-2-1-0`,
      name: 'bod_detail_id', type: 'String',
      required: true, description: 'Unique identifier for the BOD detail record',
      sortOrder: 0, entityId: ent_0_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-1` },
    update: {},
    create: {
      id: `seed-0-2-1-1`,
      name: 'bod_id', type: 'String',
      required: true, description: 'BOD to which this detail belongs',
      sortOrder: 1, entityId: ent_0_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-2` },
    update: {},
    create: {
      id: `seed-0-2-1-2`,
      name: 'transport_mode_id', type: 'String',
      required: false, description: 'Mode of transport for this lane',
      sortOrder: 2, entityId: ent_0_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-3` },
    update: {},
    create: {
      id: `seed-0-2-1-3`,
      name: 'lead_time', type: 'Decimal',
      required: true, description: 'Transit lead time for this lane',
      sortOrder: 3, entityId: ent_0_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-4` },
    update: {},
    create: {
      id: `seed-0-2-1-4`,
      name: 'lead_time_uom_id', type: 'String',
      required: true, description: 'Unit of measure for lead time',
      sortOrder: 4, entityId: ent_0_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-1-5` },
    update: {},
    create: {
      id: `seed-0-2-1-5`,
      name: 'cost', type: 'Decimal',
      required: false, description: 'Transportation cost for this lane',
      sortOrder: 5, entityId: ent_0_2_1.id,
    },
  });
  const ent_0_2_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_2.id, name: `Transport Mode` } },
    update: {},
    create: {
      name: `Transport Mode`,
      description: `=VLOOKUP(D12, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_2.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-2-0` },
    update: {},
    create: {
      id: `seed-0-2-2-0`,
      name: 'transport_mode_id', type: 'String',
      required: true, description: 'Unique identifier for the transport mode',
      sortOrder: 0, entityId: ent_0_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-2-1` },
    update: {},
    create: {
      id: `seed-0-2-2-1`,
      name: 'mode_name', type: 'String',
      required: true, description: 'Name of the transport mode',
      sortOrder: 1, entityId: ent_0_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-2-2` },
    update: {},
    create: {
      id: `seed-0-2-2-2`,
      name: 'mode_type', type: 'Enum(Road|Rail|Air|Sea|Intermodal|Pipeline)',
      required: true, description: 'Physical type of transport',
      sortOrder: 2, entityId: ent_0_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-2-2-3` },
    update: {},
    create: {
      id: `seed-0-2-2-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the transport mode',
      sortOrder: 3, entityId: ent_0_2_2.id,
    },
  });
  const sub_0_3 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Financial Model' } },
    update: {},
    create: { name: 'Financial Model', modelId: model_0.id, sortOrder: 3 },
  });
  const ent_0_3_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Activity Cost Master` } },
    update: {},
    create: {
      name: `Activity Cost Master`,
      description: `=VLOOKUP(D13, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for resource","target":"Resource","cardinality":"M:1","type":"Association","description":"Activity Cost Master defines cost for a Resource"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-0` },
    update: {},
    create: {
      id: `seed-0-3-0-0`,
      name: 'activity_cost_id', type: 'String',
      required: true, description: 'Unique identifier for the activity cost record',
      sortOrder: 0, entityId: ent_0_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-1` },
    update: {},
    create: {
      id: `seed-0-3-0-1`,
      name: 'resource_id', type: 'String',
      required: false, description: 'Resource being costed',
      sortOrder: 1, entityId: ent_0_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-2` },
    update: {},
    create: {
      id: `seed-0-3-0-2`,
      name: 'operation_id', type: 'String',
      required: false, description: 'Operation being costed',
      sortOrder: 2, entityId: ent_0_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-3` },
    update: {},
    create: {
      id: `seed-0-3-0-3`,
      name: 'cost_per_hour', type: 'Decimal',
      required: true, description: 'Hourly cost rate for the resource/operation',
      sortOrder: 3, entityId: ent_0_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-4` },
    update: {},
    create: {
      id: `seed-0-3-0-4`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of cost validity',
      sortOrder: 4, entityId: ent_0_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-0-5` },
    update: {},
    create: {
      id: `seed-0-3-0-5`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the cost rate',
      sortOrder: 5, entityId: ent_0_3_0.id,
    },
  });
  const ent_0_3_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Balance Sheet Statement` } },
    update: {},
    create: {
      name: `Balance Sheet Statement`,
      description: `=VLOOKUP(D14, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for org","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Balance Sheet is reported for an Org unit"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-0` },
    update: {},
    create: {
      id: `seed-0-3-1-0`,
      name: 'balance_sheet_id', type: 'String',
      required: true, description: 'Unique identifier for the balance sheet',
      sortOrder: 0, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-1` },
    update: {},
    create: {
      id: `seed-0-3-1-1`,
      name: 'org_id', type: 'String',
      required: true, description: 'Org entity for the balance sheet',
      sortOrder: 1, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-2` },
    update: {},
    create: {
      id: `seed-0-3-1-2`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period',
      sortOrder: 2, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-3` },
    update: {},
    create: {
      id: `seed-0-3-1-3`,
      name: 'total_assets', type: 'Decimal',
      required: false, description: 'Total assets',
      sortOrder: 3, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-4` },
    update: {},
    create: {
      id: `seed-0-3-1-4`,
      name: 'total_liabilities', type: 'Decimal',
      required: false, description: 'Total liabilities',
      sortOrder: 4, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-5` },
    update: {},
    create: {
      id: `seed-0-3-1-5`,
      name: 'equity', type: 'Decimal',
      required: false, description: 'Shareholders equity',
      sortOrder: 5, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-6` },
    update: {},
    create: {
      id: `seed-0-3-1-6`,
      name: 'cash', type: 'Decimal',
      required: false, description: 'Cash and cash equivalents',
      sortOrder: 6, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-7` },
    update: {},
    create: {
      id: `seed-0-3-1-7`,
      name: 'inventory_value', type: 'Decimal',
      required: false, description: 'Value of inventory on the balance sheet',
      sortOrder: 7, entityId: ent_0_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-1-8` },
    update: {},
    create: {
      id: `seed-0-3-1-8`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Reporting currency',
      sortOrder: 8, entityId: ent_0_3_1.id,
    },
  });
  const ent_0_3_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Cash Flow Statement` } },
    update: {},
    create: {
      name: `Cash Flow Statement`,
      description: `=VLOOKUP(D15, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for org","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Cash Flow is reported for an Org unit"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-0` },
    update: {},
    create: {
      id: `seed-0-3-2-0`,
      name: 'cash_flow_id', type: 'String',
      required: true, description: 'Unique identifier for the cash flow statement',
      sortOrder: 0, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-1` },
    update: {},
    create: {
      id: `seed-0-3-2-1`,
      name: 'org_id', type: 'String',
      required: true, description: 'Org entity for the cash flow statement',
      sortOrder: 1, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-2` },
    update: {},
    create: {
      id: `seed-0-3-2-2`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period',
      sortOrder: 2, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-3` },
    update: {},
    create: {
      id: `seed-0-3-2-3`,
      name: 'operating_cash_flow', type: 'Decimal',
      required: false, description: 'Net cash from operating activities',
      sortOrder: 3, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-4` },
    update: {},
    create: {
      id: `seed-0-3-2-4`,
      name: 'investing_cash_flow', type: 'Decimal',
      required: false, description: 'Net cash from investing activities',
      sortOrder: 4, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-5` },
    update: {},
    create: {
      id: `seed-0-3-2-5`,
      name: 'financing_cash_flow', type: 'Decimal',
      required: false, description: 'Net cash from financing activities',
      sortOrder: 5, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-6` },
    update: {},
    create: {
      id: `seed-0-3-2-6`,
      name: 'net_cash_flow', type: 'Decimal',
      required: false, description: 'Total net change in cash',
      sortOrder: 6, entityId: ent_0_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-2-7` },
    update: {},
    create: {
      id: `seed-0-3-2-7`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Reporting currency',
      sortOrder: 7, entityId: ent_0_3_2.id,
    },
  });
  const ent_0_3_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Facility Cost Master` } },
    update: {},
    create: {
      name: `Facility Cost Master`,
      description: `=VLOOKUP(D16, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for site","target":"Site","cardinality":"M:1","type":"Association","description":"Facility Cost Master captures costs for a Site"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-0` },
    update: {},
    create: {
      id: `seed-0-3-3-0`,
      name: 'facility_cost_id', type: 'String',
      required: true, description: 'Unique identifier for the facility cost record',
      sortOrder: 0, entityId: ent_0_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-1` },
    update: {},
    create: {
      id: `seed-0-3-3-1`,
      name: 'site_id', type: 'String',
      required: true, description: 'Site to which the cost applies',
      sortOrder: 1, entityId: ent_0_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-2` },
    update: {},
    create: {
      id: `seed-0-3-3-2`,
      name: 'cost_type', type: 'Enum(Fixed|Variable|SemiVariable)',
      required: true, description: 'Classification of the cost behaviour',
      sortOrder: 2, entityId: ent_0_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-3` },
    update: {},
    create: {
      id: `seed-0-3-3-3`,
      name: 'period', type: 'String',
      required: true, description: 'Period for which the cost is defined',
      sortOrder: 3, entityId: ent_0_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-4` },
    update: {},
    create: {
      id: `seed-0-3-3-4`,
      name: 'amount', type: 'Decimal',
      required: true, description: 'Cost amount for the period',
      sortOrder: 4, entityId: ent_0_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-3-5` },
    update: {},
    create: {
      id: `seed-0-3-3-5`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the cost',
      sortOrder: 5, entityId: ent_0_3_3.id,
    },
  });
  const ent_0_3_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Financial Statement Line Item` } },
    update: {},
    create: {
      name: `Financial Statement Line Item`,
      description: `=VLOOKUP(D17, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"is categorised by","target":"GL Account","cardinality":"M:1","type":"Association","description":"Each Financial Statement Line Item references a single GL Account that determines its financial classification"},{"name":"is reported for","target":"GL Account Hierarchy","cardinality":"M:1","type":"Association","description":"Line items are associated with a GL Account Hierarchy scheme for roll-up and aggregation"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-0` },
    update: {},
    create: {
      id: `seed-0-3-4-0`,
      name: 'line_item_id', type: 'String',
      required: true, description: 'Unique identifier for this line item record',
      sortOrder: 0, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-1` },
    update: {},
    create: {
      id: `seed-0-3-4-1`,
      name: 'gl_account_id', type: 'String',
      required: true, description: 'FK to GL Account — determines which financial line this value represents',
      sortOrder: 1, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-2` },
    update: {},
    create: {
      id: `seed-0-3-4-2`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to Organization Unit — the reporting entity (company, BU, cost center)',
      sortOrder: 2, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-3` },
    update: {},
    create: {
      id: `seed-0-3-4-3`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period identifier (e.g. 2025-Q1, 2025-01, FY2025)',
      sortOrder: 3, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-4` },
    update: {},
    create: {
      id: `seed-0-3-4-4`,
      name: 'period_start_date', type: 'Date',
      required: true, description: 'Start date of the reporting period',
      sortOrder: 4, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-5` },
    update: {},
    create: {
      id: `seed-0-3-4-5`,
      name: 'period_end_date', type: 'Date',
      required: true, description: 'End date of the reporting period',
      sortOrder: 5, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-6` },
    update: {},
    create: {
      id: `seed-0-3-4-6`,
      name: 'scenario_type', type: 'Enum(Actual|Budget|Forecast|Plan|Reforecast|ProForma)',
      required: true, description: 'Distinguishes actuals from planning versions',
      sortOrder: 6, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-7` },
    update: {},
    create: {
      id: `seed-0-3-4-7`,
      name: 'scenario_version', type: 'String',
      required: false, description: 'Version qualifier within a scenario type (e.g. V1, V2, Board Approved)',
      sortOrder: 7, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-8` },
    update: {},
    create: {
      id: `seed-0-3-4-8`,
      name: 'amount', type: 'Decimal',
      required: true, description: 'Monetary value in the reporting currency (sign follows normal_balance convention)',
      sortOrder: 8, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-9` },
    update: {},
    create: {
      id: `seed-0-3-4-9`,
      name: 'currency_id', type: 'String',
      required: true, description: 'FK to Currency — the currency of the reported amount',
      sortOrder: 9, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-10` },
    update: {},
    create: {
      id: `seed-0-3-4-10`,
      name: 'amount_local', type: 'Decimal',
      required: false, description: 'Amount in local/functional currency before translation',
      sortOrder: 10, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-11` },
    update: {},
    create: {
      id: `seed-0-3-4-11`,
      name: 'currency_local_id', type: 'String',
      required: false, description: 'FK to Currency — local/functional currency if different from reporting',
      sortOrder: 11, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-12` },
    update: {},
    create: {
      id: `seed-0-3-4-12`,
      name: 'quantity', type: 'Decimal',
      required: false, description: 'Optional non-monetary quantity (e.g. headcount for salary expense, units for revenue)',
      sortOrder: 12, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-13` },
    update: {},
    create: {
      id: `seed-0-3-4-13`,
      name: 'uom_id', type: 'String',
      required: false, description: 'FK to Unit of Measure for the quantity field',
      sortOrder: 13, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-14` },
    update: {},
    create: {
      id: `seed-0-3-4-14`,
      name: 'source_system', type: 'String',
      required: false, description: 'Originating system (e.g. SAP, Oracle GL, Hyperion, manual)',
      sortOrder: 14, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-15` },
    update: {},
    create: {
      id: `seed-0-3-4-15`,
      name: 'posted_date', type: 'Date',
      required: false, description: 'Date the value was posted or loaded',
      sortOrder: 15, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-16` },
    update: {},
    create: {
      id: `seed-0-3-4-16`,
      name: 'is_adjusted', type: 'Boolean',
      required: false, description: 'Whether this is a post-close or audit adjustment entry',
      sortOrder: 16, entityId: ent_0_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-4-17` },
    update: {},
    create: {
      id: `seed-0-3-4-17`,
      name: 'notes', type: 'String',
      required: false, description: 'Free-text explanation for unusual or adjusted values',
      sortOrder: 17, entityId: ent_0_3_4.id,
    },
  });
  const ent_0_3_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Financial Statement Template` } },
    update: {},
    create: {
      name: `Financial Statement Template`,
      description: `=VLOOKUP(D18, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"defines layout using","target":"GL Account Hierarchy","cardinality":"M:1","type":"Association","description":"A template is built on a specific GL Account Hierarchy scheme that drives its roll-up structure"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-0` },
    update: {},
    create: {
      id: `seed-0-3-5-0`,
      name: 'template_id', type: 'String',
      required: true, description: 'Unique identifier for the template',
      sortOrder: 0, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-1` },
    update: {},
    create: {
      id: `seed-0-3-5-1`,
      name: 'template_name', type: 'String',
      required: true, description: 'Display name (e.g. Management P&L, Statutory Balance Sheet, Board Cash Flow Summary)',
      sortOrder: 1, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-2` },
    update: {},
    create: {
      id: `seed-0-3-5-2`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the template purpose and intended audience',
      sortOrder: 2, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-3` },
    update: {},
    create: {
      id: `seed-0-3-5-3`,
      name: 'statement_type', type: 'Enum(IncomeStatement|BalanceSheet|CashFlowStatement|Combined|Custom)',
      required: true, description: 'Which financial statement this template renders',
      sortOrder: 3, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-4` },
    update: {},
    create: {
      id: `seed-0-3-5-4`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Which GL Account Hierarchy scheme this template uses for roll-ups',
      sortOrder: 4, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-5` },
    update: {},
    create: {
      id: `seed-0-3-5-5`,
      name: 'org_scope', type: 'String',
      required: false, description: 'FK to Organization Unit — restricts template to a specific reporting entity, null = all',
      sortOrder: 5, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-6` },
    update: {},
    create: {
      id: `seed-0-3-5-6`,
      name: 'default_scenario', type: 'Enum(Actual|Budget|Forecast|Plan)',
      required: false, description: 'Default scenario type when the template is rendered',
      sortOrder: 6, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-7` },
    update: {},
    create: {
      id: `seed-0-3-5-7`,
      name: 'show_variance', type: 'Boolean',
      required: false, description: 'Whether to show variance columns (Actual vs Budget, Period vs Prior)',
      sortOrder: 7, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-8` },
    update: {},
    create: {
      id: `seed-0-3-5-8`,
      name: 'variance_basis', type: 'Enum(Budget|PriorPeriod|PriorYear|Forecast)',
      required: false, description: 'What to compare against when showing variance',
      sortOrder: 8, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-9` },
    update: {},
    create: {
      id: `seed-0-3-5-9`,
      name: 'status', type: 'Enum(Active|Draft|Archived)',
      required: true, description: 'Lifecycle status of the template',
      sortOrder: 9, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-10` },
    update: {},
    create: {
      id: `seed-0-3-5-10`,
      name: 'owner', type: 'String',
      required: false, description: 'Person or team responsible for maintaining this template',
      sortOrder: 10, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-11` },
    update: {},
    create: {
      id: `seed-0-3-5-11`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date from which this template is valid',
      sortOrder: 11, entityId: ent_0_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-5-12` },
    update: {},
    create: {
      id: `seed-0-3-5-12`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date after which this template is retired',
      sortOrder: 12, entityId: ent_0_3_5.id,
    },
  });
  const ent_0_3_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Financial Statement Template Line` } },
    update: {},
    create: {
      name: `Financial Statement Template Line`,
      description: `=VLOOKUP(D19, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"is a line of","target":"Financial Statement Template","cardinality":"M:1","type":"Composition","description":"Each template line belongs to exactly one Financial Statement Template"},{"name":"displays","target":"GL Account","cardinality":"M:1","type":"Association","description":"A template line maps to a specific GL Account or subtotal node to display on the report"}],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-0` },
    update: {},
    create: {
      id: `seed-0-3-6-0`,
      name: 'template_line_id', type: 'String',
      required: true, description: 'Unique identifier for this template line',
      sortOrder: 0, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-1` },
    update: {},
    create: {
      id: `seed-0-3-6-1`,
      name: 'template_id', type: 'String',
      required: true, description: 'FK to Financial Statement Template',
      sortOrder: 1, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-2` },
    update: {},
    create: {
      id: `seed-0-3-6-2`,
      name: 'gl_account_id', type: 'String',
      required: true, description: 'FK to GL Account — the account or subtotal this line displays',
      sortOrder: 2, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-3` },
    update: {},
    create: {
      id: `seed-0-3-6-3`,
      name: 'line_label', type: 'String',
      required: false, description: 'Override display label (if different from gl_account_name)',
      sortOrder: 3, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-4` },
    update: {},
    create: {
      id: `seed-0-3-6-4`,
      name: 'sort_order', type: 'Integer',
      required: true, description: 'Display sequence within the template',
      sortOrder: 4, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-5` },
    update: {},
    create: {
      id: `seed-0-3-6-5`,
      name: 'indent_level', type: 'Integer',
      required: false, description: 'Visual indentation level (0=header, 1=subtotal, 2=detail)',
      sortOrder: 5, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-6` },
    update: {},
    create: {
      id: `seed-0-3-6-6`,
      name: 'is_subtotal', type: 'Boolean',
      required: true, description: 'Whether this line shows a rolled-up subtotal from child accounts',
      sortOrder: 6, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-7` },
    update: {},
    create: {
      id: `seed-0-3-6-7`,
      name: 'is_bold', type: 'Boolean',
      required: false, description: 'Whether this line renders in bold (typically for totals and section headers)',
      sortOrder: 7, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-8` },
    update: {},
    create: {
      id: `seed-0-3-6-8`,
      name: 'show_separator_above', type: 'Boolean',
      required: false, description: 'Whether to render a horizontal line above this row',
      sortOrder: 8, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-9` },
    update: {},
    create: {
      id: `seed-0-3-6-9`,
      name: 'sign_convention', type: 'Enum(Natural|Reversed|Absolute)',
      required: false, description: 'How to display the sign (Reversed flips expenses to show as positive)',
      sortOrder: 9, entityId: ent_0_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-6-10` },
    update: {},
    create: {
      id: `seed-0-3-6-10`,
      name: 'display_format', type: 'Enum(Currency|Percentage|Number|Blank)',
      required: false, description: 'Number format for this line',
      sortOrder: 10, entityId: ent_0_3_6.id,
    },
  });
  const ent_0_3_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `GL Account` } },
    update: {},
    create: {
      name: `GL Account`,
      description: `=VLOOKUP(D20, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"belongs to hierarchy via","target":"GL Account Hierarchy","cardinality":"M:M","type":"Association","description":"A GL Account participates in one or more hierarchy roll-up schemes (e.g. Statutory P&L, Management P&L)"}],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-0` },
    update: {},
    create: {
      id: `seed-0-3-7-0`,
      name: 'gl_account_id', type: 'String',
      required: true, description: 'Unique identifier for the GL account',
      sortOrder: 0, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-1` },
    update: {},
    create: {
      id: `seed-0-3-7-1`,
      name: 'gl_account_code', type: 'String',
      required: true, description: 'Standard account code (e.g. 4000, 5100)',
      sortOrder: 1, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-2` },
    update: {},
    create: {
      id: `seed-0-3-7-2`,
      name: 'gl_account_name', type: 'String',
      required: true, description: 'Descriptive name of the account (e.g. Net Revenue, Cost of Raw Materials)',
      sortOrder: 2, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-3` },
    update: {},
    create: {
      id: `seed-0-3-7-3`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of what transactions post to this account',
      sortOrder: 3, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-4` },
    update: {},
    create: {
      id: `seed-0-3-7-4`,
      name: 'account_class', type: 'Enum(Asset|Liability|Equity|Revenue|Expense)',
      required: true, description: 'Top-level accounting classification per GAAP/IFRS',
      sortOrder: 4, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-5` },
    update: {},
    create: {
      id: `seed-0-3-7-5`,
      name: 'account_category', type: 'Enum(OperatingRevenue|NonOperatingRevenue|COGS|OperatingExpense|DepreciationAmortization|InterestExpense|Tax|OtherIncome|OtherExpense|CurrentAsset|NonCurrentAsset|CurrentLiability|NonCurrentLiability|ShareholderEquity|OperatingCashFlow|InvestingCashFlow|FinancingCashFlow)',
      required: true, description: 'Sub-classification that determines placement on financial statements',
      sortOrder: 5, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-6` },
    update: {},
    create: {
      id: `seed-0-3-7-6`,
      name: 'statement_type', type: 'Enum(IncomeStatement|BalanceSheet|CashFlowStatement)',
      required: true, description: 'Which primary financial statement this account appears on',
      sortOrder: 6, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-7` },
    update: {},
    create: {
      id: `seed-0-3-7-7`,
      name: 'normal_balance', type: 'Enum(Debit|Credit)',
      required: true, description: 'Expected balance direction for this account',
      sortOrder: 7, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-8` },
    update: {},
    create: {
      id: `seed-0-3-7-8`,
      name: 'is_control_account', type: 'Boolean',
      required: false, description: 'Whether this is a control/summary account (e.g. Accounts Receivable control)',
      sortOrder: 8, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-9` },
    update: {},
    create: {
      id: `seed-0-3-7-9`,
      name: 'is_postable', type: 'Boolean',
      required: true, description: 'Whether transactions can be posted directly to this account (false for parent/roll-up accounts)',
      sortOrder: 9, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-10` },
    update: {},
    create: {
      id: `seed-0-3-7-10`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Default reporting currency for this account',
      sortOrder: 10, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-11` },
    update: {},
    create: {
      id: `seed-0-3-7-11`,
      name: 'status', type: 'Enum(Active|Inactive|Blocked)',
      required: true, description: 'Current lifecycle status',
      sortOrder: 11, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-12` },
    update: {},
    create: {
      id: `seed-0-3-7-12`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date from which this account is valid',
      sortOrder: 12, entityId: ent_0_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-7-13` },
    update: {},
    create: {
      id: `seed-0-3-7-13`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date after which this account is no longer valid',
      sortOrder: 13, entityId: ent_0_3_7.id,
    },
  });
  const ent_0_3_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `GL Account Hierarchy` } },
    update: {},
    create: {
      name: `GL Account Hierarchy`,
      description: `=VLOOKUP(D21, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"parent of","target":"GL Account Hierarchy","cardinality":"1:M","type":"Self-Reference","description":"GL Account Hierarchy records form a tree; a parent node aggregates multiple child accounts"}],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-0` },
    update: {},
    create: {
      id: `seed-0-3-8-0`,
      name: 'gl_hierarchy_id', type: 'String',
      required: true, description: 'Unique identifier for this hierarchy relationship',
      sortOrder: 0, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-1` },
    update: {},
    create: {
      id: `seed-0-3-8-1`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Name of the hierarchy scheme (e.g. Statutory P&L, Management P&L, IFRS)',
      sortOrder: 1, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-2` },
    update: {},
    create: {
      id: `seed-0-3-8-2`,
      name: 'parent_gl_account_id', type: 'String',
      required: true, description: 'FK to the parent GL Account in the roll-up',
      sortOrder: 2, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-3` },
    update: {},
    create: {
      id: `seed-0-3-8-3`,
      name: 'child_gl_account_id', type: 'String',
      required: true, description: 'FK to the child GL Account',
      sortOrder: 3, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-4` },
    update: {},
    create: {
      id: `seed-0-3-8-4`,
      name: 'level', type: 'Integer',
      required: true, description: 'Depth level in the hierarchy (1 = top-level summary, increasing for detail)',
      sortOrder: 4, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-5` },
    update: {},
    create: {
      id: `seed-0-3-8-5`,
      name: 'sort_order', type: 'Integer',
      required: true, description: 'Display sequence within the parent for reporting',
      sortOrder: 5, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-6` },
    update: {},
    create: {
      id: `seed-0-3-8-6`,
      name: 'aggregation_sign', type: 'Enum(Add|Subtract)',
      required: true, description: 'Whether this child adds to or subtracts from the parent total (e.g. Returns subtract from Gross Revenue to yield Net Revenue)',
      sortOrder: 6, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-7` },
    update: {},
    create: {
      id: `seed-0-3-8-7`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date from which this hierarchy mapping is valid',
      sortOrder: 7, entityId: ent_0_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-8-8` },
    update: {},
    create: {
      id: `seed-0-3-8-8`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date after which this hierarchy mapping is no longer valid',
      sortOrder: 8, entityId: ent_0_3_8.id,
    },
  });
  const ent_0_3_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Income Statement` } },
    update: {},
    create: {
      name: `Income Statement`,
      description: `=VLOOKUP(D22, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for org","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Income Statement is reported for an Org unit"}],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-0` },
    update: {},
    create: {
      id: `seed-0-3-9-0`,
      name: 'income_statement_id', type: 'String',
      required: true, description: 'Unique identifier for the income statement',
      sortOrder: 0, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-1` },
    update: {},
    create: {
      id: `seed-0-3-9-1`,
      name: 'org_id', type: 'String',
      required: true, description: 'Org entity for the statement',
      sortOrder: 1, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-2` },
    update: {},
    create: {
      id: `seed-0-3-9-2`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period',
      sortOrder: 2, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-3` },
    update: {},
    create: {
      id: `seed-0-3-9-3`,
      name: 'revenue', type: 'Decimal',
      required: true, description: 'Total net revenue',
      sortOrder: 3, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-4` },
    update: {},
    create: {
      id: `seed-0-3-9-4`,
      name: 'cogs', type: 'Decimal',
      required: false, description: 'Cost of goods sold',
      sortOrder: 4, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-5` },
    update: {},
    create: {
      id: `seed-0-3-9-5`,
      name: 'gross_margin', type: 'Decimal',
      required: false, description: 'Gross margin (Revenue - COGS)',
      sortOrder: 5, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-6` },
    update: {},
    create: {
      id: `seed-0-3-9-6`,
      name: 'operating_expenses', type: 'Decimal',
      required: false, description: 'Total operating expenses',
      sortOrder: 6, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-7` },
    update: {},
    create: {
      id: `seed-0-3-9-7`,
      name: 'ebitda', type: 'Decimal',
      required: false, description: 'Earnings before interest, tax, depreciation and amortisation',
      sortOrder: 7, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-8` },
    update: {},
    create: {
      id: `seed-0-3-9-8`,
      name: 'net_income', type: 'Decimal',
      required: false, description: 'Net income after all charges',
      sortOrder: 8, entityId: ent_0_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-9-9` },
    update: {},
    create: {
      id: `seed-0-3-9-9`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Reporting currency',
      sortOrder: 9, entityId: ent_0_3_9.id,
    },
  });
  const ent_0_3_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Purchase Cost Master` } },
    update: {},
    create: {
      name: `Purchase Cost Master`,
      description: `=VLOOKUP(D23, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"Purchase Cost Master defines cost for an Item"},{"name":"from supplier","target":"Supplier","cardinality":"M:1","type":"Association","description":"Purchase Cost Master is defined for a Supplier"}],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-0` },
    update: {},
    create: {
      id: `seed-0-3-10-0`,
      name: 'purchase_cost_id', type: 'String',
      required: true, description: 'Unique identifier for the purchase cost record',
      sortOrder: 0, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-1` },
    update: {},
    create: {
      id: `seed-0-3-10-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being purchased',
      sortOrder: 1, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-2` },
    update: {},
    create: {
      id: `seed-0-3-10-2`,
      name: 'supplier_id', type: 'String',
      required: true, description: 'Supplier from whom the item is purchased',
      sortOrder: 2, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-3` },
    update: {},
    create: {
      id: `seed-0-3-10-3`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of cost validity',
      sortOrder: 3, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-4` },
    update: {},
    create: {
      id: `seed-0-3-10-4`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of cost validity',
      sortOrder: 4, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-5` },
    update: {},
    create: {
      id: `seed-0-3-10-5`,
      name: 'cost', type: 'Decimal',
      required: true, description: 'Purchase cost per unit',
      sortOrder: 5, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-6` },
    update: {},
    create: {
      id: `seed-0-3-10-6`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the purchase cost',
      sortOrder: 6, entityId: ent_0_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-10-7` },
    update: {},
    create: {
      id: `seed-0-3-10-7`,
      name: 'payment_terms', type: 'String',
      required: false, description: 'Payment terms agreed with supplier',
      sortOrder: 7, entityId: ent_0_3_10.id,
    },
  });
  const ent_0_3_11 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Transport Cost Master` } },
    update: {},
    create: {
      name: `Transport Cost Master`,
      description: `=VLOOKUP(D24, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"from location","target":"Location","cardinality":"M:1","type":"Association","description":"Transport Cost Master defines cost from a Location"},{"name":"to location","target":"Location","cardinality":"M:1","type":"Association","description":"Transport Cost Master defines cost to a Location"}],
      sortOrder: 11,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-0` },
    update: {},
    create: {
      id: `seed-0-3-11-0`,
      name: 'transport_cost_id', type: 'String',
      required: true, description: 'Unique identifier for the transport cost record',
      sortOrder: 0, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-1` },
    update: {},
    create: {
      id: `seed-0-3-11-1`,
      name: 'from_location_id', type: 'String',
      required: true, description: 'Origin location',
      sortOrder: 1, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-2` },
    update: {},
    create: {
      id: `seed-0-3-11-2`,
      name: 'to_location_id', type: 'String',
      required: true, description: 'Destination location',
      sortOrder: 2, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-3` },
    update: {},
    create: {
      id: `seed-0-3-11-3`,
      name: 'transport_mode_id', type: 'String',
      required: true, description: 'Mode of transport',
      sortOrder: 3, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-4` },
    update: {},
    create: {
      id: `seed-0-3-11-4`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of cost validity',
      sortOrder: 4, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-5` },
    update: {},
    create: {
      id: `seed-0-3-11-5`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of cost validity',
      sortOrder: 5, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-6` },
    update: {},
    create: {
      id: `seed-0-3-11-6`,
      name: 'cost_per_unit', type: 'Decimal',
      required: true, description: 'Cost per unit of weight or volume',
      sortOrder: 6, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-7` },
    update: {},
    create: {
      id: `seed-0-3-11-7`,
      name: 'cost_uom_id', type: 'String',
      required: true, description: 'Unit of measure for the cost basis',
      sortOrder: 7, entityId: ent_0_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-11-8` },
    update: {},
    create: {
      id: `seed-0-3-11-8`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the cost',
      sortOrder: 8, entityId: ent_0_3_11.id,
    },
  });
  const ent_0_3_12 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Unit Cost` } },
    update: {},
    create: {
      name: `Unit Cost`,
      description: `=VLOOKUP(D25, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for item at","target":"Item","cardinality":"M:1","type":"Association","description":"A Unit Cost is defined for an Item"},{"name":"at site","target":"Site","cardinality":"M:1","type":"Association","description":"A Unit Cost is valid at a Site"}],
      sortOrder: 12,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-0` },
    update: {},
    create: {
      id: `seed-0-3-12-0`,
      name: 'unit_cost_id', type: 'String',
      required: true, description: 'Unique identifier for the cost record',
      sortOrder: 0, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-1` },
    update: {},
    create: {
      id: `seed-0-3-12-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item for which the cost is defined',
      sortOrder: 1, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-2` },
    update: {},
    create: {
      id: `seed-0-3-12-2`,
      name: 'site_id', type: 'String',
      required: true, description: 'Site for which the cost is valid',
      sortOrder: 2, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-3` },
    update: {},
    create: {
      id: `seed-0-3-12-3`,
      name: 'cost_type', type: 'Enum(Standard|Actual|Planned|Transfer)',
      required: true, description: 'Type of cost',
      sortOrder: 3, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-4` },
    update: {},
    create: {
      id: `seed-0-3-12-4`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of cost validity',
      sortOrder: 4, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-5` },
    update: {},
    create: {
      id: `seed-0-3-12-5`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of cost validity',
      sortOrder: 5, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-6` },
    update: {},
    create: {
      id: `seed-0-3-12-6`,
      name: 'cost', type: 'Decimal',
      required: true, description: 'Unit cost amount',
      sortOrder: 6, entityId: ent_0_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-12-7` },
    update: {},
    create: {
      id: `seed-0-3-12-7`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the cost',
      sortOrder: 7, entityId: ent_0_3_12.id,
    },
  });
  const ent_0_3_13 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_3.id, name: `Unit Price` } },
    update: {},
    create: {
      name: `Unit Price`,
      description: `=VLOOKUP(D26, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_3.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Unit Price is defined for an Item"},{"name":"in sales org","target":"Sales Organization","cardinality":"M:1","type":"Association","description":"A Unit Price is valid within a Sales Organisation"},{"name":"for customer","target":"Enterprise Customer","cardinality":"M:1","type":"Association","description":"A Unit Price can be customer-specific"}],
      sortOrder: 13,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-0` },
    update: {},
    create: {
      id: `seed-0-3-13-0`,
      name: 'unit_price_id', type: 'String',
      required: true, description: 'Unique identifier for the price record',
      sortOrder: 0, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-1` },
    update: {},
    create: {
      id: `seed-0-3-13-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item for which the price is defined',
      sortOrder: 1, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-2` },
    update: {},
    create: {
      id: `seed-0-3-13-2`,
      name: 'sales_org_id', type: 'String',
      required: true, description: 'Sales org for which the price is valid',
      sortOrder: 2, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-3` },
    update: {},
    create: {
      id: `seed-0-3-13-3`,
      name: 'customer_id', type: 'String',
      required: false, description: 'Customer-specific price (null = list price)',
      sortOrder: 3, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-4` },
    update: {},
    create: {
      id: `seed-0-3-13-4`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of price validity',
      sortOrder: 4, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-5` },
    update: {},
    create: {
      id: `seed-0-3-13-5`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of price validity',
      sortOrder: 5, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-6` },
    update: {},
    create: {
      id: `seed-0-3-13-6`,
      name: 'price', type: 'Decimal',
      required: true, description: 'Unit price amount',
      sortOrder: 6, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-7` },
    update: {},
    create: {
      id: `seed-0-3-13-7`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Currency of the price',
      sortOrder: 7, entityId: ent_0_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-3-13-8` },
    update: {},
    create: {
      id: `seed-0-3-13-8`,
      name: 'price_type', type: 'Enum(List|Contract|Spot|Transfer)',
      required: true, description: 'Classification of the price type',
      sortOrder: 8, entityId: ent_0_3_13.id,
    },
  });
  const sub_0_4 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Inventory Model' } },
    update: {},
    create: { name: 'Inventory Model', modelId: model_0.id, sortOrder: 4 },
  });
  const ent_0_4_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_4.id, name: `Material Node` } },
    update: {},
    create: {
      name: `Material Node`,
      description: `=VLOOKUP(D27, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_4.id,
      relationships: [{"name":"is item at","target":"Item","cardinality":"M:1","type":"Association","description":"A Material Node represents an Item at a Site"},{"name":"is at","target":"Site","cardinality":"M:1","type":"Association","description":"A Material Node is defined for a Site"},{"name":"governed by","target":"Inventory Policy","cardinality":"1:1","type":"Composition","description":"A Material Node has one Inventory Policy"},{"name":"has on-hand inventory","target":"Inventory On Hand","cardinality":"1:M","type":"Composition","description":"A Material Node has associated Inventory On Hand records"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-0` },
    update: {},
    create: {
      id: `seed-0-4-0-0`,
      name: 'material_node_id', type: 'String',
      required: true, description: 'Unique identifier for the material node',
      sortOrder: 0, entityId: ent_0_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-1` },
    update: {},
    create: {
      id: `seed-0-4-0-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item at this node',
      sortOrder: 1, entityId: ent_0_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-2` },
    update: {},
    create: {
      id: `seed-0-4-0-2`,
      name: 'site_id', type: 'String',
      required: true, description: 'Site where the item is stocked/managed',
      sortOrder: 2, entityId: ent_0_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-3` },
    update: {},
    create: {
      id: `seed-0-4-0-3`,
      name: 'node_type', type: 'Enum(Make|Buy|Transfer|Virtual)',
      required: true, description: 'Type of supply activity at this node',
      sortOrder: 3, entityId: ent_0_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-4` },
    update: {},
    create: {
      id: `seed-0-4-0-4`,
      name: 'planning_method', type: 'Enum(MRP|Reorder|MinMax|Kanban|Manual)',
      required: false, description: 'Planning method used for this material node',
      sortOrder: 4, entityId: ent_0_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-4-0-5` },
    update: {},
    create: {
      id: `seed-0-4-0-5`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this material node is active for planning',
      sortOrder: 5, entityId: ent_0_4_0.id,
    },
  });
  const sub_0_5 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Item-Product Model' } },
    update: {},
    create: { name: 'Item-Product Model', modelId: model_0.id, sortOrder: 5 },
  });
  const ent_0_5_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Finished Good` } },
    update: {},
    create: {
      name: `Finished Good`,
      description: `=VLOOKUP(D28, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-0` },
    update: {},
    create: {
      id: `seed-0-5-0-0`,
      name: 'item_id', type: 'String',
      required: true, description: 'FK to parent Item record',
      sortOrder: 0, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-1` },
    update: {},
    create: {
      id: `seed-0-5-0-1`,
      name: 'revision_number', type: 'Boolean',
      required: false, description: 'Whether the item can be sold as a product',
      sortOrder: 1, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-2` },
    update: {},
    create: {
      id: `seed-0-5-0-2`,
      name: 'standard_cost', type: 'Decimal',
      required: true, description: 'Indicates this is a virtual or phantom item',
      sortOrder: 2, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-3` },
    update: {},
    create: {
      id: `seed-0-5-0-3`,
      name: 'is_lot_tracked', type: 'Boolean',
      required: true, description: 'Whether the item needs batch/lot tracking',
      sortOrder: 3, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-4` },
    update: {},
    create: {
      id: `seed-0-5-0-4`,
      name: 'EAN_code', type: 'String',
      required: false, description: 'EAN Code',
      sortOrder: 4, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-5` },
    update: {},
    create: {
      id: `seed-0-5-0-5`,
      name: 'UPC_code', type: 'String',
      required: false, description: 'UPC Code',
      sortOrder: 5, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-6` },
    update: {},
    create: {
      id: `seed-0-5-0-6`,
      name: 'GTIN_code', type: 'String',
      required: false, description: 'GTIN Code',
      sortOrder: 6, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-7` },
    update: {},
    create: {
      id: `seed-0-5-0-7`,
      name: 'Base_UOM', type: 'String',
      required: true, description: 'E.g. Each',
      sortOrder: 7, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-8` },
    update: {},
    create: {
      id: `seed-0-5-0-8`,
      name: 'Sales_UOM', type: 'String',
      required: true, description: 'E.g. Case Pack of 12',
      sortOrder: 8, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-9` },
    update: {},
    create: {
      id: `seed-0-5-0-9`,
      name: 'Shipping_UOM', type: 'String',
      required: true, description: 'E.g. Pallets',
      sortOrder: 9, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-10` },
    update: {},
    create: {
      id: `seed-0-5-0-10`,
      name: 'Length', type: 'Decimal',
      required: true, description: '',
      sortOrder: 10, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-11` },
    update: {},
    create: {
      id: `seed-0-5-0-11`,
      name: 'Breadth', type: 'Decimal',
      required: true, description: '',
      sortOrder: 11, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-12` },
    update: {},
    create: {
      id: `seed-0-5-0-12`,
      name: 'Width', type: 'Decimal',
      required: true, description: '',
      sortOrder: 12, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-13` },
    update: {},
    create: {
      id: `seed-0-5-0-13`,
      name: 'Dimension_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 13, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-14` },
    update: {},
    create: {
      id: `seed-0-5-0-14`,
      name: 'Volume', type: 'Decimal',
      required: true, description: '',
      sortOrder: 14, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-15` },
    update: {},
    create: {
      id: `seed-0-5-0-15`,
      name: 'Volume_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 15, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-16` },
    update: {},
    create: {
      id: `seed-0-5-0-16`,
      name: 'Weight', type: 'Decimal',
      required: true, description: '',
      sortOrder: 16, entityId: ent_0_5_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-0-17` },
    update: {},
    create: {
      id: `seed-0-5-0-17`,
      name: 'Weight_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 17, entityId: ent_0_5_0.id,
    },
  });
  const ent_0_5_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Item` } },
    update: {},
    create: {
      name: `Item`,
      description: `=VLOOKUP(D29, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [{"name":"measured in","target":"Unit of Measure","cardinality":"M:1","type":"Association","description":"Each Item has a base Unit of Measure"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-0` },
    update: {},
    create: {
      id: `seed-0-5-1-0`,
      name: 'item_id', type: 'String',
      required: true, description: 'Unique system identifier for the item',
      sortOrder: 0, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-1` },
    update: {},
    create: {
      id: `seed-0-5-1-1`,
      name: 'item_code', type: 'String',
      required: true, description: 'Business/ERP code for the item',
      sortOrder: 1, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-2` },
    update: {},
    create: {
      id: `seed-0-5-1-2`,
      name: 'item_name', type: 'String',
      required: true, description: 'Descriptive name of the item',
      sortOrder: 2, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-3` },
    update: {},
    create: {
      id: `seed-0-5-1-3`,
      name: 'item_type', type: 'Enum(Product|SemiFinishedGoods|RawMaterial|Other)',
      required: true, description: 'Classifies the item into its primary type. Addition Enum types of item attributes can be added',
      sortOrder: 3, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-4` },
    update: {},
    create: {
      id: `seed-0-5-1-4`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of the item',
      sortOrder: 4, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-5` },
    update: {},
    create: {
      id: `seed-0-5-1-5`,
      name: 'status', type: 'Enum(Active|Inactive|Discontinued)',
      required: true, description: 'Lifecycle status of the item',
      sortOrder: 5, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-6` },
    update: {},
    create: {
      id: `seed-0-5-1-6`,
      name: 'base_uom', type: 'String',
      required: true, description: 'Base unit of measure for the item',
      sortOrder: 6, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-7` },
    update: {},
    create: {
      id: `seed-0-5-1-7`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the item record was created',
      sortOrder: 7, entityId: ent_0_5_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-1-8` },
    update: {},
    create: {
      id: `seed-0-5-1-8`,
      name: 'modified_date', type: 'Date',
      required: false, description: 'Date the item record was last modified',
      sortOrder: 8, entityId: ent_0_5_1.id,
    },
  });
  const ent_0_5_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Item Hierarchy Definition` } },
    update: {},
    create: {
      name: `Item Hierarchy Definition`,
      description: `=VLOOKUP(D30, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-2-0` },
    update: {},
    create: {
      id: `seed-0-5-2-0`,
      name: 'item_hierarchy_id', type: 'String',
      required: true, description: 'Unique system identifier for the item hierarchy instance',
      sortOrder: 0, entityId: ent_0_5_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-2-1` },
    update: {},
    create: {
      id: `seed-0-5-2-1`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Descriptive name for the hierarchy',
      sortOrder: 1, entityId: ent_0_5_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-2-2` },
    update: {},
    create: {
      id: `seed-0-5-2-2`,
      name: 'hierarchy_type', type: 'String',
      required: false, description: 'An optional attribute indicating the usage of the hierarchy',
      sortOrder: 2, entityId: ent_0_5_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-2-3` },
    update: {},
    create: {
      id: `seed-0-5-2-3`,
      name: 'description', type: 'String',
      required: true, description: 'Detailed description of the hierarchy',
      sortOrder: 3, entityId: ent_0_5_2.id,
    },
  });
  const ent_0_5_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Item Hierarchy Level Definition` } },
    update: {},
    create: {
      name: `Item Hierarchy Level Definition`,
      description: `=VLOOKUP(D31, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-3-0` },
    update: {},
    create: {
      id: `seed-0-5-3-0`,
      name: 'item_hierarchy_level_id', type: 'String',
      required: true, description: 'Unique system identifier for a level definition within an item hierarchy instance',
      sortOrder: 0, entityId: ent_0_5_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-3-1` },
    update: {},
    create: {
      id: `seed-0-5-3-1`,
      name: 'hierarchy_id', type: 'String',
      required: true, description: 'Descriptive name for the hierarchy',
      sortOrder: 1, entityId: ent_0_5_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-3-2` },
    update: {},
    create: {
      id: `seed-0-5-3-2`,
      name: 'level_name', type: 'String',
      required: true, description: 'Descriptive name of the level',
      sortOrder: 2, entityId: ent_0_5_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-3-3` },
    update: {},
    create: {
      id: `seed-0-5-3-3`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'Depth in the hierarchy (1 = root)',
      sortOrder: 3, entityId: ent_0_5_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-3-4` },
    update: {},
    create: {
      id: `seed-0-5-3-4`,
      name: 'item_type', type: 'String',
      required: true, description: 'The type who\'s members can populate this level.',
      sortOrder: 4, entityId: ent_0_5_3.id,
    },
  });
  const ent_0_5_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Item Hierarchy Membership` } },
    update: {},
    create: {
      name: `Item Hierarchy Membership`,
      description: `=VLOOKUP(D32, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-0` },
    update: {},
    create: {
      id: `seed-0-5-4-0`,
      name: 'membership_id', type: 'String',
      required: true, description: 'Unique record identifier for an item membership in the item hierarchy',
      sortOrder: 0, entityId: ent_0_5_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-1` },
    update: {},
    create: {
      id: `seed-0-5-4-1`,
      name: 'item_hierarchy_id', type: 'String',
      required: true, description: 'The specific item hierarchy this assignment belongs to',
      sortOrder: 1, entityId: ent_0_5_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-2` },
    update: {},
    create: {
      id: `seed-0-5-4-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'The item instance being added to the hierarchy',
      sortOrder: 2, entityId: ent_0_5_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-3` },
    update: {},
    create: {
      id: `seed-0-5-4-3`,
      name: 'parent_item_id', type: 'String',
      required: true, description: 'Parent item',
      sortOrder: 3, entityId: ent_0_5_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-4` },
    update: {},
    create: {
      id: `seed-0-5-4-4`,
      name: 'item_hierarchy_level_name', type: 'String',
      required: true, description: 'The level at which this item must exist in the hierarchy',
      sortOrder: 4, entityId: ent_0_5_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-4-5` },
    update: {},
    create: {
      id: `seed-0-5-4-5`,
      name: 'sort_order', type: 'String',
      required: true, description: 'Sort order (for items at the same level) under the parent',
      sortOrder: 5, entityId: ent_0_5_4.id,
    },
  });
  const ent_0_5_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Product` } },
    update: {},
    create: {
      name: `Product`,
      description: `=VLOOKUP(D33, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [{"name":"maps to a set of","target":"Item","cardinality":"1:M","type":"Inheritance","description":"Product usually maps to a finished goods Item, but can also map to multiple Items (e.g. a bundled product)"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-0` },
    update: {},
    create: {
      id: `seed-0-5-5-0`,
      name: 'product_id', type: 'String',
      required: true, description: 'FK to parent Item record',
      sortOrder: 0, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-1` },
    update: {},
    create: {
      id: `seed-0-5-5-1`,
      name: 'product_name', type: 'String',
      required: true, description: 'Descriptive name of the product',
      sortOrder: 1, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-2` },
    update: {},
    create: {
      id: `seed-0-5-5-2`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of the product',
      sortOrder: 2, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-3` },
    update: {},
    create: {
      id: `seed-0-5-5-3`,
      name: 'product_type', type: 'String',
      required: true, description: 'Defines whether the product is a SKU, or a Brand etc… Typically these are part of the product hierarchy, but defined as entities in their own right. This field has to belong to the set of Product Types, which are extensions of Product',
      sortOrder: 3, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-4` },
    update: {},
    create: {
      id: `seed-0-5-5-4`,
      name: 'launch_date', type: 'Date',
      required: false, description: 'Commercial launch date of the product',
      sortOrder: 4, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-5` },
    update: {},
    create: {
      id: `seed-0-5-5-5`,
      name: 'discontinue_date', type: 'Date',
      required: false, description: 'Planned or actual discontinuation date',
      sortOrder: 5, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-6` },
    update: {},
    create: {
      id: `seed-0-5-5-6`,
      name: 'is_sellable', type: 'Boolean',
      required: true, description: 'Indicates whether the product is available for sale',
      sortOrder: 6, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-7` },
    update: {},
    create: {
      id: `seed-0-5-5-7`,
      name: 'product_category', type: 'String',
      required: false, description: 'Type that is defined in the standard (o9) hierarchy of the product',
      sortOrder: 7, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-8` },
    update: {},
    create: {
      id: `seed-0-5-5-8`,
      name: 'brand', type: 'String',
      required: false, description: 'Type that is defined in the standard (o9) hierarchy of the product',
      sortOrder: 8, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-9` },
    update: {},
    create: {
      id: `seed-0-5-5-9`,
      name: 'fulfillment_strategy', type: 'Enum(MakeToStock|MakeToOrder|ConfigureToOrder|EngineerToOrder)',
      required: true, description: 'How this product is fulfilled. MakeToStock = standard inventory-driven; MakeToOrder = produced per order; ConfigureToOrder = customer selects options that resolve to BOM; EngineerToOrder = BOM engineered per order.',
      sortOrder: 9, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-10` },
    update: {},
    create: {
      id: `seed-0-5-5-10`,
      name: 'is_lot_tracked', type: 'Boolean',
      required: true, description: 'Whether the item needs batch/lot tracking',
      sortOrder: 10, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-11` },
    update: {},
    create: {
      id: `seed-0-5-5-11`,
      name: 'EAN_code', type: 'String',
      required: false, description: 'EAN Code',
      sortOrder: 11, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-12` },
    update: {},
    create: {
      id: `seed-0-5-5-12`,
      name: 'UPC_code', type: 'String',
      required: false, description: 'UPC Code',
      sortOrder: 12, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-13` },
    update: {},
    create: {
      id: `seed-0-5-5-13`,
      name: 'GTIN_code', type: 'String',
      required: false, description: 'GTIN Code',
      sortOrder: 13, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-14` },
    update: {},
    create: {
      id: `seed-0-5-5-14`,
      name: 'Base_UOM', type: 'String',
      required: true, description: 'E.g. Each',
      sortOrder: 14, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-15` },
    update: {},
    create: {
      id: `seed-0-5-5-15`,
      name: 'Sales_UOM', type: 'String',
      required: true, description: 'E.g. Case Pack of 12',
      sortOrder: 15, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-16` },
    update: {},
    create: {
      id: `seed-0-5-5-16`,
      name: 'Shipping_UOM', type: 'String',
      required: true, description: 'E.g. Pallets',
      sortOrder: 16, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-17` },
    update: {},
    create: {
      id: `seed-0-5-5-17`,
      name: 'Length', type: 'Decimal',
      required: true, description: '',
      sortOrder: 17, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-18` },
    update: {},
    create: {
      id: `seed-0-5-5-18`,
      name: 'Breadth', type: 'Decimal',
      required: true, description: '',
      sortOrder: 18, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-19` },
    update: {},
    create: {
      id: `seed-0-5-5-19`,
      name: 'Width', type: 'Decimal',
      required: true, description: '',
      sortOrder: 19, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-20` },
    update: {},
    create: {
      id: `seed-0-5-5-20`,
      name: 'Dimension_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 20, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-21` },
    update: {},
    create: {
      id: `seed-0-5-5-21`,
      name: 'Volume', type: 'Decimal',
      required: true, description: '',
      sortOrder: 21, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-22` },
    update: {},
    create: {
      id: `seed-0-5-5-22`,
      name: 'Volume_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 22, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-23` },
    update: {},
    create: {
      id: `seed-0-5-5-23`,
      name: 'Weight', type: 'Decimal',
      required: true, description: '',
      sortOrder: 23, entityId: ent_0_5_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-5-24` },
    update: {},
    create: {
      id: `seed-0-5-5-24`,
      name: 'Weight_UOM', type: 'String',
      required: true, description: '',
      sortOrder: 24, entityId: ent_0_5_5.id,
    },
  });
  const ent_0_5_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Product Hierarchy Definition` } },
    update: {},
    create: {
      name: `Product Hierarchy Definition`,
      description: `=VLOOKUP(D34, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-0` },
    update: {},
    create: {
      id: `seed-0-5-6-0`,
      name: 'product_hierarchy_id', type: 'String',
      required: true, description: 'Unique system identifier for the product hierarchy instance',
      sortOrder: 0, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-1` },
    update: {},
    create: {
      id: `seed-0-5-6-1`,
      name: 'product_id', type: 'String',
      required: true, description: 'Descriptive name for the hierarchy',
      sortOrder: 1, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-2` },
    update: {},
    create: {
      id: `seed-0-5-6-2`,
      name: 'hierarchy_type', type: 'String',
      required: true, description: 'An optional attribute indicating the usage of the hierarchy',
      sortOrder: 2, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-3` },
    update: {},
    create: {
      id: `seed-0-5-6-3`,
      name: 'description', type: 'String',
      required: true, description: 'Detailed description of the hierarchy',
      sortOrder: 3, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-4` },
    update: {},
    create: {
      id: `seed-0-5-6-4`,
      name: 'logo', type: 'Image',
      required: true, description: 'Logo',
      sortOrder: 4, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-5` },
    update: {},
    create: {
      id: `seed-0-5-6-5`,
      name: 'tagline', type: 'String',
      required: true, description: 'Slogan or tagline for the brand',
      sortOrder: 5, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-6` },
    update: {},
    create: {
      id: `seed-0-5-6-6`,
      name: 'brand_tier', type: 'Enum(Luxury|Midmarket|…)',
      required: true, description: 'Tier of products in which this brand competes',
      sortOrder: 6, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-7` },
    update: {},
    create: {
      id: `seed-0-5-6-7`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Descriptive name for the hierarchy',
      sortOrder: 7, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-8` },
    update: {},
    create: {
      id: `seed-0-5-6-8`,
      name: 'hierarchy_type', type: 'String',
      required: true, description: 'An optional attribute indicating the usage of the hierarchy',
      sortOrder: 8, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-9` },
    update: {},
    create: {
      id: `seed-0-5-6-9`,
      name: 'description', type: 'String',
      required: true, description: 'Detailed description of the hierarchy',
      sortOrder: 9, entityId: ent_0_5_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-6-10` },
    update: {},
    create: {
      id: `seed-0-5-6-10`,
      name: 'consumer_segment', type: 'List[Consumer Segment]',
      required: false, description: 'Consumer and market segments which this brand serves',
      sortOrder: 10, entityId: ent_0_5_6.id,
    },
  });
  const ent_0_5_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Product Hierarchy Level Definition` } },
    update: {},
    create: {
      name: `Product Hierarchy Level Definition`,
      description: `=VLOOKUP(D35, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-7-0` },
    update: {},
    create: {
      id: `seed-0-5-7-0`,
      name: 'product_hierarchy_level_id', type: 'String',
      required: true, description: 'Unique system identifier for a level definition within an product hierarchy instance',
      sortOrder: 0, entityId: ent_0_5_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-7-1` },
    update: {},
    create: {
      id: `seed-0-5-7-1`,
      name: 'hierarchy_id', type: 'String',
      required: true, description: 'Descriptive name for the hierarchy',
      sortOrder: 1, entityId: ent_0_5_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-7-2` },
    update: {},
    create: {
      id: `seed-0-5-7-2`,
      name: 'level_name', type: 'String',
      required: true, description: 'Descriptive name of the level',
      sortOrder: 2, entityId: ent_0_5_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-7-3` },
    update: {},
    create: {
      id: `seed-0-5-7-3`,
      name: 'level_depth', type: 'String',
      required: true, description: 'Depth in the hierarchy (1 = root)',
      sortOrder: 3, entityId: ent_0_5_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-7-4` },
    update: {},
    create: {
      id: `seed-0-5-7-4`,
      name: 'product_type', type: 'String',
      required: true, description: 'The type who\'s members can populate this level.',
      sortOrder: 4, entityId: ent_0_5_7.id,
    },
  });
  const ent_0_5_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Product Hierarchy Membership` } },
    update: {},
    create: {
      name: `Product Hierarchy Membership`,
      description: `=VLOOKUP(D36, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-0` },
    update: {},
    create: {
      id: `seed-0-5-8-0`,
      name: 'membership_id', type: 'String',
      required: true, description: 'Unique record identifier for an item membership in the product hierarchy',
      sortOrder: 0, entityId: ent_0_5_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-1` },
    update: {},
    create: {
      id: `seed-0-5-8-1`,
      name: 'product_hierarchy_id', type: 'String',
      required: true, description: 'The specific product hierarchy this assignment belongs to',
      sortOrder: 1, entityId: ent_0_5_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-2` },
    update: {},
    create: {
      id: `seed-0-5-8-2`,
      name: 'product_id', type: 'String',
      required: true, description: 'The product instance being added to the hierarchy',
      sortOrder: 2, entityId: ent_0_5_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-3` },
    update: {},
    create: {
      id: `seed-0-5-8-3`,
      name: 'parent_product_id', type: 'String',
      required: true, description: 'Parent product',
      sortOrder: 3, entityId: ent_0_5_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-4` },
    update: {},
    create: {
      id: `seed-0-5-8-4`,
      name: 'product_hierarchy_level_name', type: 'String',
      required: true, description: 'The level at which this product must exist in the hierarchy',
      sortOrder: 4, entityId: ent_0_5_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-8-5` },
    update: {},
    create: {
      id: `seed-0-5-8-5`,
      name: 'sort_order', type: 'String',
      required: true, description: 'Sort order (for products at the same level) under the parent',
      sortOrder: 5, entityId: ent_0_5_8.id,
    },
  });
  const ent_0_5_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Raw Material` } },
    update: {},
    create: {
      name: `Raw Material`,
      description: `=VLOOKUP(D37, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [{"name":"is a","target":"Item","cardinality":"1:1","type":"Inheritance","description":"Raw Material is a specialisation of Item"}],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-9-0` },
    update: {},
    create: {
      id: `seed-0-5-9-0`,
      name: 'item_id', type: 'String',
      required: true, description: 'FK to parent Item record',
      sortOrder: 0, entityId: ent_0_5_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-9-1` },
    update: {},
    create: {
      id: `seed-0-5-9-1`,
      name: 'commodity_type', type: 'String',
      required: false, description: 'Classification of the raw material',
      sortOrder: 1, entityId: ent_0_5_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-9-2` },
    update: {},
    create: {
      id: `seed-0-5-9-2`,
      name: 'sourcing_strategy', type: 'Enum(SingleSource|MultiSource|Strategic)',
      required: false, description: 'Preferred sourcing strategy for the material',
      sortOrder: 2, entityId: ent_0_5_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-9-3` },
    update: {},
    create: {
      id: `seed-0-5-9-3`,
      name: 'is_critical', type: 'Boolean',
      required: true, description: 'Whether the material is critical or not',
      sortOrder: 3, entityId: ent_0_5_9.id,
    },
  });
  const ent_0_5_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_5.id, name: `Semi Finished Good` } },
    update: {},
    create: {
      name: `Semi Finished Good`,
      description: `=VLOOKUP(D38, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_5.id,
      relationships: [],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-10-0` },
    update: {},
    create: {
      id: `seed-0-5-10-0`,
      name: 'item_id', type: 'String',
      required: true, description: 'FK to parent Item record',
      sortOrder: 0, entityId: ent_0_5_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-10-1` },
    update: {},
    create: {
      id: `seed-0-5-10-1`,
      name: 'is_sellable', type: 'Boolean',
      required: false, description: 'Whether the item can be sold as a product',
      sortOrder: 1, entityId: ent_0_5_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-5-10-2` },
    update: {},
    create: {
      id: `seed-0-5-10-2`,
      name: 'is_virtual', type: 'Boolean',
      required: true, description: 'Indicates this is a virtual or phantom item',
      sortOrder: 2, entityId: ent_0_5_10.id,
    },
  });
  const sub_0_6 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Location Model' } },
    update: {},
    create: { name: 'Location Model', modelId: model_0.id, sortOrder: 6 },
  });
  const ent_0_6_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_6.id, name: `Planning Location` } },
    update: {},
    create: {
      name: `Planning Location`,
      description: `=VLOOKUP(D39, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_6.id,
      relationships: [{"name":"maps to ","target":"Location","cardinality":"M:1","type":"Association","description":"A Planning Location usually maps to a Site or a Site+Storage Location set, but can also map to other entities (e.g. Customers) as well"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-0-0` },
    update: {},
    create: {
      id: `seed-0-6-0-0`,
      name: 'location_id', type: 'String',
      required: true, description: 'Unique identifier for the location',
      sortOrder: 0, entityId: ent_0_6_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-0-1` },
    update: {},
    create: {
      id: `seed-0-6-0-1`,
      name: 'location_name', type: 'String',
      required: true, description: 'Name of the location',
      sortOrder: 1, entityId: ent_0_6_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-0-2` },
    update: {},
    create: {
      id: `seed-0-6-0-2`,
      name: 'location_type', type: 'Enum(Warehouse|DC|Store|Plant|Port|Virtual)',
      required: true, description: 'Classifies the type of location',
      sortOrder: 2, entityId: ent_0_6_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-0-3` },
    update: {},
    create: {
      id: `seed-0-6-0-3`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the location is active for planning',
      sortOrder: 3, entityId: ent_0_6_0.id,
    },
  });
  const ent_0_6_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_6.id, name: `Site` } },
    update: {},
    create: {
      name: `Site`,
      description: `=VLOOKUP(D40, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_6.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-0` },
    update: {},
    create: {
      id: `seed-0-6-1-0`,
      name: 'site_id', type: 'String',
      required: true, description: 'Unique identifier for the site',
      sortOrder: 0, entityId: ent_0_6_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-1` },
    update: {},
    create: {
      id: `seed-0-6-1-1`,
      name: 'site_name', type: 'String',
      required: true, description: 'Name of the site',
      sortOrder: 1, entityId: ent_0_6_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-2` },
    update: {},
    create: {
      id: `seed-0-6-1-2`,
      name: 'site_type', type: 'Enum(Plant|Warehouse|DC|CrossDock)',
      required: true, description: 'Type classification of the site',
      sortOrder: 2, entityId: ent_0_6_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-3` },
    update: {},
    create: {
      id: `seed-0-6-1-3`,
      name: 'address', type: 'Address',
      required: true, description: 'Physical address of the site',
      sortOrder: 3, entityId: ent_0_6_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-4` },
    update: {},
    create: {
      id: `seed-0-6-1-4`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Default currency for the site',
      sortOrder: 4, entityId: ent_0_6_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-1-5` },
    update: {},
    create: {
      id: `seed-0-6-1-5`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the site is active for planning',
      sortOrder: 5, entityId: ent_0_6_1.id,
    },
  });
  const ent_0_6_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_6.id, name: `Storage Location` } },
    update: {},
    create: {
      name: `Storage Location`,
      description: `=VLOOKUP(D41, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_6.id,
      relationships: [{"name":"belongs to","target":"Site","cardinality":"M:1","type":"Association","description":"Storage Locations are sub-divisions of a Site"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-2-0` },
    update: {},
    create: {
      id: `seed-0-6-2-0`,
      name: 'storage_location_id', type: 'String',
      required: true, description: 'Unique identifier for the site',
      sortOrder: 0, entityId: ent_0_6_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-2-1` },
    update: {},
    create: {
      id: `seed-0-6-2-1`,
      name: 'storage_location_name', type: 'String',
      required: true, description: 'Descriptive name of the storage location',
      sortOrder: 1, entityId: ent_0_6_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-2-2` },
    update: {},
    create: {
      id: `seed-0-6-2-2`,
      name: 'site_name', type: 'Enum(Plant|Warehouse|DC|CrossDock)',
      required: true, description: 'Name of the site to which this storage location belongs (the parent)',
      sortOrder: 2, entityId: ent_0_6_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-2-3` },
    update: {},
    create: {
      id: `seed-0-6-2-3`,
      name: 'storage_type', type: 'String',
      required: false, description: 'If the specific location is specified by a storage type',
      sortOrder: 3, entityId: ent_0_6_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-2-4` },
    update: {},
    create: {
      id: `seed-0-6-2-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the site is active for planning',
      sortOrder: 4, entityId: ent_0_6_2.id,
    },
  });
  const ent_0_6_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_6.id, name: `Storage Type` } },
    update: {},
    create: {
      name: `Storage Type`,
      description: `=VLOOKUP(D42, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_6.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-3-0` },
    update: {},
    create: {
      id: `seed-0-6-3-0`,
      name: 'storage_type_id', type: 'String',
      required: true, description: 'Unique identifier for the storage type',
      sortOrder: 0, entityId: ent_0_6_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-3-1` },
    update: {},
    create: {
      id: `seed-0-6-3-1`,
      name: 'storage_type_name', type: 'String',
      required: true, description: 'Name of the storage type',
      sortOrder: 1, entityId: ent_0_6_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-3-2` },
    update: {},
    create: {
      id: `seed-0-6-3-2`,
      name: 'function_type', type: 'Enum(Standard|Quality|Blocked|Consignment|Returns)',
      required: true, description: 'Functional classification of the storage area',
      sortOrder: 2, entityId: ent_0_6_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-3-3` },
    update: {},
    create: {
      id: `seed-0-6-3-3`,
      name: 'description', type: 'String',
      required: false, description: 'Additional description of the storage location',
      sortOrder: 3, entityId: ent_0_6_3.id,
    },
  });
  const ent_0_6_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_6.id, name: `Location` } },
    update: {},
    create: {
      name: `Location`,
      description: `Abstract parent entity representing any physical or logical location. Specialised by Site, Storage Location, and Planning Location. Widely referenced as a relationship target across demand, distribution, and procurement.`,
      modelType: 'Abstract',
      subModelId: sub_0_6.id,
      relationships: [{"name":"located in","target":"Market Geo-Region","cardinality":"M:1","type":"Association","description":"A Location is situated within a Market Geo-Region"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-0` },
    update: {},
    create: {
      id: `seed-0-6-4-0`,
      name: 'location_id', type: 'UUID',
      required: true, description: 'Unique identifier for the location',
      sortOrder: 0, entityId: ent_0_6_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-1` },
    update: {},
    create: {
      id: `seed-0-6-4-1`,
      name: 'location_name', type: 'String',
      required: true, description: 'Name of the location',
      sortOrder: 1, entityId: ent_0_6_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-2` },
    update: {},
    create: {
      id: `seed-0-6-4-2`,
      name: 'location_type', type: 'Enum(Site|StorageLocation|PlanningLocation|CustomerLocation|SupplierLocation)',
      required: true, description: 'Type classification of the location',
      sortOrder: 2, entityId: ent_0_6_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-3` },
    update: {},
    create: {
      id: `seed-0-6-4-3`,
      name: 'address', type: 'PhysicalAddress',
      required: false, description: 'Physical address of the location',
      sortOrder: 3, entityId: ent_0_6_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-4` },
    update: {},
    create: {
      id: `seed-0-6-4-4`,
      name: 'geo_region_id', type: 'UUID',
      required: false, description: 'Market Geo-Region this location falls within',
      sortOrder: 4, entityId: ent_0_6_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-6-4-5` },
    update: {},
    create: {
      id: `seed-0-6-4-5`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this location is active',
      sortOrder: 5, entityId: ent_0_6_4.id,
    },
  });
  const sub_0_7 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Manufacturing Network Model' } },
    update: {},
    create: { name: 'Manufacturing Network Model', modelId: model_0.id, sortOrder: 7 },
  });
  const ent_0_7_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Bill of Materials` } },
    update: {},
    create: {
      name: `Bill of Materials`,
      description: `=VLOOKUP(D43, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"defines inputs for","target":"Item","cardinality":"M:1","type":"Association","description":"A BOM defines the components needed to produce an Item"},{"name":"valid at","target":"Site","cardinality":"M:1","type":"Association","description":"A BOM may be site-specific"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-0` },
    update: {},
    create: {
      id: `seed-0-7-0-0`,
      name: 'bom_id', type: 'String',
      required: true, description: 'Unique identifier for the BOM',
      sortOrder: 0, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-1` },
    update: {},
    create: {
      id: `seed-0-7-0-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Parent/finished item of the BOM',
      sortOrder: 1, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-2` },
    update: {},
    create: {
      id: `seed-0-7-0-2`,
      name: 'site_id', type: 'String',
      required: false, description: 'Site-specific BOM (null = global)',
      sortOrder: 2, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-3` },
    update: {},
    create: {
      id: `seed-0-7-0-3`,
      name: 'valid_from', type: 'Date',
      required: false, description: 'Date from which the BOM is valid',
      sortOrder: 3, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-4` },
    update: {},
    create: {
      id: `seed-0-7-0-4`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'Date on which the BOM expires',
      sortOrder: 4, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-5` },
    update: {},
    create: {
      id: `seed-0-7-0-5`,
      name: 'bom_type', type: 'Enum(Production|Sales|Costing|Planning)',
      required: true, description: 'Purpose/type of the BOM',
      sortOrder: 5, entityId: ent_0_7_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-0-6` },
    update: {},
    create: {
      id: `seed-0-7-0-6`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the BOM is active',
      sortOrder: 6, entityId: ent_0_7_0.id,
    },
  });
  const ent_0_7_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `BOM Component` } },
    update: {},
    create: {
      name: `BOM Component`,
      description: `=VLOOKUP(D44, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"part of","target":"Bill of Materials","cardinality":"M:1","type":"Association","description":"A BOM Component is a line within a BOM"},{"name":"is item","target":"Item","cardinality":"M:1","type":"Association","description":"A BOM Component references a component Item"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-0` },
    update: {},
    create: {
      id: `seed-0-7-1-0`,
      name: 'bom_component_id', type: 'String',
      required: true, description: 'Unique identifier for the BOM component line',
      sortOrder: 0, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-1` },
    update: {},
    create: {
      id: `seed-0-7-1-1`,
      name: 'bom_id', type: 'String',
      required: true, description: 'BOM to which this component belongs',
      sortOrder: 1, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-2` },
    update: {},
    create: {
      id: `seed-0-7-1-2`,
      name: 'component_item_id', type: 'String',
      required: true, description: 'Component item required by the BOM',
      sortOrder: 2, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-3` },
    update: {},
    create: {
      id: `seed-0-7-1-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Quantity of the component required per parent',
      sortOrder: 3, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-4` },
    update: {},
    create: {
      id: `seed-0-7-1-4`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure for the component quantity',
      sortOrder: 4, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-5` },
    update: {},
    create: {
      id: `seed-0-7-1-5`,
      name: 'scrap_factor', type: 'Decimal',
      required: false, description: 'Expected scrap/waste factor (0-1)',
      sortOrder: 5, entityId: ent_0_7_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-1-6` },
    update: {},
    create: {
      id: `seed-0-7-1-6`,
      name: 'is_phantom', type: 'Boolean',
      required: false, description: 'Whether this is a phantom/non-stocked component',
      sortOrder: 6, entityId: ent_0_7_1.id,
    },
  });
  const ent_0_7_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Item-BOM-Routing Association` } },
    update: {},
    create: {
      name: `Item-BOM-Routing Association`,
      description: `=VLOOKUP(D45, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"links item","target":"Item","cardinality":"M:1","type":"Association","description":"Associates an Item with its production BOM and Routing"},{"name":"uses bom","target":"Bill of Materials","cardinality":"M:1","type":"Association","description":"References the BOM used for production"},{"name":"uses routing","target":"Routing","cardinality":"M:1","type":"Association","description":"References the Routing used for production"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-0` },
    update: {},
    create: {
      id: `seed-0-7-2-0`,
      name: 'association_id', type: 'String',
      required: true, description: 'Unique identifier for the association',
      sortOrder: 0, entityId: ent_0_7_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-1` },
    update: {},
    create: {
      id: `seed-0-7-2-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being produced',
      sortOrder: 1, entityId: ent_0_7_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-2` },
    update: {},
    create: {
      id: `seed-0-7-2-2`,
      name: 'bom_id', type: 'String',
      required: true, description: 'BOM used for production',
      sortOrder: 2, entityId: ent_0_7_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-3` },
    update: {},
    create: {
      id: `seed-0-7-2-3`,
      name: 'routing_id', type: 'String',
      required: true, description: 'Routing used for production',
      sortOrder: 3, entityId: ent_0_7_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-4` },
    update: {},
    create: {
      id: `seed-0-7-2-4`,
      name: 'valid_from', type: 'Date',
      required: false, description: 'Validity start date',
      sortOrder: 4, entityId: ent_0_7_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-2-5` },
    update: {},
    create: {
      id: `seed-0-7-2-5`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'Validity end date',
      sortOrder: 5, entityId: ent_0_7_2.id,
    },
  });
  const ent_0_7_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Operation` } },
    update: {},
    create: {
      name: `Operation`,
      description: `=VLOOKUP(D46, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"step of","target":"Routing","cardinality":"M:1","type":"Association","description":"An Operation is a step within a Routing"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-0` },
    update: {},
    create: {
      id: `seed-0-7-3-0`,
      name: 'operation_id', type: 'String',
      required: true, description: 'Unique identifier for the operation',
      sortOrder: 0, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-1` },
    update: {},
    create: {
      id: `seed-0-7-3-1`,
      name: 'operation_name', type: 'String',
      required: true, description: 'Name of the operation',
      sortOrder: 1, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-2` },
    update: {},
    create: {
      id: `seed-0-7-3-2`,
      name: 'routing_id', type: 'String',
      required: true, description: 'Routing to which this operation belongs',
      sortOrder: 2, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-3` },
    update: {},
    create: {
      id: `seed-0-7-3-3`,
      name: 'sequence_number', type: 'Integer',
      required: true, description: 'Order of this operation in the routing sequence',
      sortOrder: 3, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-4` },
    update: {},
    create: {
      id: `seed-0-7-3-4`,
      name: 'operation_type', type: 'String',
      required: false, description: 'Type/category of the operation',
      sortOrder: 4, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-5` },
    update: {},
    create: {
      id: `seed-0-7-3-5`,
      name: 'standard_time', type: 'Decimal',
      required: false, description: 'Standard execution time for this operation',
      sortOrder: 5, entityId: ent_0_7_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-3-6` },
    update: {},
    create: {
      id: `seed-0-7-3-6`,
      name: 'time_uom_id', type: 'String',
      required: false, description: 'Unit of measure for the standard time',
      sortOrder: 6, entityId: ent_0_7_3.id,
    },
  });
  const ent_0_7_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Operation Resource` } },
    update: {},
    create: {
      name: `Operation Resource`,
      description: `=VLOOKUP(D47, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"maps resource to","target":"Operation","cardinality":"M:1","type":"Association","description":"An Operation Resource links an Operation to a Resource"},{"name":"uses","target":"Resource","cardinality":"M:1","type":"Association","description":"An Operation Resource references a Resource"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-4-0` },
    update: {},
    create: {
      id: `seed-0-7-4-0`,
      name: 'operation_resource_id', type: 'String',
      required: true, description: 'Unique identifier for the operation-resource mapping',
      sortOrder: 0, entityId: ent_0_7_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-4-1` },
    update: {},
    create: {
      id: `seed-0-7-4-1`,
      name: 'operation_id', type: 'String',
      required: true, description: 'Operation requiring this resource',
      sortOrder: 1, entityId: ent_0_7_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-4-2` },
    update: {},
    create: {
      id: `seed-0-7-4-2`,
      name: 'resource_id', type: 'String',
      required: true, description: 'Resource assigned to the operation',
      sortOrder: 2, entityId: ent_0_7_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-4-3` },
    update: {},
    create: {
      id: `seed-0-7-4-3`,
      name: 'usage_rate', type: 'Decimal',
      required: true, description: 'Rate of resource consumption per unit of operation',
      sortOrder: 3, entityId: ent_0_7_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-4-4` },
    update: {},
    create: {
      id: `seed-0-7-4-4`,
      name: 'is_primary', type: 'Boolean',
      required: false, description: 'Whether this is the primary resource for the operation',
      sortOrder: 4, entityId: ent_0_7_4.id,
    },
  });
  const ent_0_7_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Routing` } },
    update: {},
    create: {
      name: `Routing`,
      description: `=VLOOKUP(D48, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [{"name":"produces","target":"Item","cardinality":"M:1","type":"Association","description":"A Routing defines how an Item is produced"},{"name":"valid at","target":"Site","cardinality":"M:1","type":"Association","description":"A Routing is valid at a specific Site"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-0` },
    update: {},
    create: {
      id: `seed-0-7-5-0`,
      name: 'routing_id', type: 'String',
      required: true, description: 'Unique identifier for the routing',
      sortOrder: 0, entityId: ent_0_7_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-1` },
    update: {},
    create: {
      id: `seed-0-7-5-1`,
      name: 'routing_name', type: 'String',
      required: true, description: 'Name of the routing',
      sortOrder: 1, entityId: ent_0_7_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-2` },
    update: {},
    create: {
      id: `seed-0-7-5-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item produced by this routing',
      sortOrder: 2, entityId: ent_0_7_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-3` },
    update: {},
    create: {
      id: `seed-0-7-5-3`,
      name: 'site_id', type: 'String',
      required: true, description: 'Site where this routing is valid',
      sortOrder: 3, entityId: ent_0_7_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-4` },
    update: {},
    create: {
      id: `seed-0-7-5-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the routing is active',
      sortOrder: 4, entityId: ent_0_7_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-5-5` },
    update: {},
    create: {
      id: `seed-0-7-5-5`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the routing',
      sortOrder: 5, entityId: ent_0_7_5.id,
    },
  });
  const ent_0_7_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_7.id, name: `Supply Activity` } },
    update: {},
    create: {
      name: `Supply Activity`,
      description: `=VLOOKUP(D49, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_7.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-6-0` },
    update: {},
    create: {
      id: `seed-0-7-6-0`,
      name: 'supply_activity_id', type: 'String',
      required: true, description: 'Unique identifier for the activity',
      sortOrder: 0, entityId: ent_0_7_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-6-1` },
    update: {},
    create: {
      id: `seed-0-7-6-1`,
      name: 'activity_name', type: 'String',
      required: true, description: 'Descriptive name of the activity',
      sortOrder: 1, entityId: ent_0_7_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-6-2` },
    update: {},
    create: {
      id: `seed-0-7-6-2`,
      name: 'activity_type', type: 'Enum(Make|Move|Buy)',
      required: true, description: 'Type of activity - mfg (Make), distribution (Move), procurement (Buy)',
      sortOrder: 2, entityId: ent_0_7_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-7-6-3` },
    update: {},
    create: {
      id: `seed-0-7-6-3`,
      name: 'lead_time', type: 'Decimal',
      required: true, description: 'Average time needed to process standard volumes',
      sortOrder: 3, entityId: ent_0_7_6.id,
    },
  });
  const sub_0_8 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Procurement Network Model' } },
    update: {},
    create: { name: 'Procurement Network Model', modelId: model_0.id, sortOrder: 8 },
  });
  const ent_0_8_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_8.id, name: `Supplier` } },
    update: {},
    create: {
      name: `Supplier`,
      description: `=VLOOKUP(D50, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_8.id,
      relationships: [{"name":"located at","target":"Location","cardinality":"M:1","type":"Association","description":"A Supplier has a primary Location"},{"name":"supplies","target":"Item","cardinality":"1:M","type":"Association","description":"A Supplier supplies one or more Items (via Supplier Item)"},{"name":"is a","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"A Supplier corresponds to an external Organisation Unit"},{"name":"has items","target":"Supplier Item","cardinality":"1:M","type":"Composition","description":"A Supplier has one or more Supplier Item records"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-0` },
    update: {},
    create: {
      id: `seed-0-8-0-0`,
      name: 'supplier_id', type: 'String',
      required: true, description: 'Unique identifier for the supplier',
      sortOrder: 0, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-1` },
    update: {},
    create: {
      id: `seed-0-8-0-1`,
      name: 'supplier_name', type: 'String',
      required: true, description: 'Name of the supplier',
      sortOrder: 1, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-2` },
    update: {},
    create: {
      id: `seed-0-8-0-2`,
      name: 'supplier_type', type: 'Enum(Direct|ContractManufacturer|Indirect|ServiceProvider)',
      required: true, description: 'Classification of the supplier',
      sortOrder: 2, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-3` },
    update: {},
    create: {
      id: `seed-0-8-0-3`,
      name: 'location_id', type: 'String',
      required: false, description: 'Primary location of the supplier',
      sortOrder: 3, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-4` },
    update: {},
    create: {
      id: `seed-0-8-0-4`,
      name: 'default_lead_time', type: 'Decimal',
      required: false, description: 'Default procurement lead time in days',
      sortOrder: 4, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-5` },
    update: {},
    create: {
      id: `seed-0-8-0-5`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Default transaction currency for the supplier',
      sortOrder: 5, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-6` },
    update: {},
    create: {
      id: `seed-0-8-0-6`,
      name: 'payment_terms', type: 'String',
      required: false, description: 'Standard payment terms (e.g. Net 30)',
      sortOrder: 6, entityId: ent_0_8_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-0-7` },
    update: {},
    create: {
      id: `seed-0-8-0-7`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the supplier is active',
      sortOrder: 7, entityId: ent_0_8_0.id,
    },
  });
  const ent_0_8_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_8.id, name: `Supplier Item` } },
    update: {},
    create: {
      name: `Supplier Item`,
      description: `Junction entity capturing the sourcing relationship between a Supplier and an Item. Carries procurement parameters: lead time, minimum order quantity, preferred/approved status, and price reference.`,
      subModelId: sub_0_8.id,
      relationships: [{"name":"supplied by","target":"Supplier","cardinality":"M:1","type":"Association","description":"The supplier providing this item"},{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"The item being sourced"},{"name":"priced via","target":"Purchase Cost Master","cardinality":"M:1","type":"Association","description":"Pricing reference for this supplier-item"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-0` },
    update: {},
    create: {
      id: `seed-0-8-1-0`,
      name: 'supplier_item_id', type: 'UUID',
      required: true, description: 'Unique identifier for the supplier-item record',
      sortOrder: 0, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-1` },
    update: {},
    create: {
      id: `seed-0-8-1-1`,
      name: 'supplier_id', type: 'UUID',
      required: true, description: 'Supplier providing the item',
      sortOrder: 1, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-2` },
    update: {},
    create: {
      id: `seed-0-8-1-2`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item being sourced',
      sortOrder: 2, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-3` },
    update: {},
    create: {
      id: `seed-0-8-1-3`,
      name: 'supplier_item_code', type: 'String',
      required: false, description: 'Supplier\'s own part number for this item',
      sortOrder: 3, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-4` },
    update: {},
    create: {
      id: `seed-0-8-1-4`,
      name: 'lead_time', type: 'Decimal',
      required: true, description: 'Procurement lead time',
      sortOrder: 4, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-5` },
    update: {},
    create: {
      id: `seed-0-8-1-5`,
      name: 'lead_time_uom_id', type: 'UUID',
      required: true, description: 'Unit of measure for lead time',
      sortOrder: 5, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-6` },
    update: {},
    create: {
      id: `seed-0-8-1-6`,
      name: 'moq', type: 'Decimal',
      required: false, description: 'Minimum order quantity',
      sortOrder: 6, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-7` },
    update: {},
    create: {
      id: `seed-0-8-1-7`,
      name: 'moq_uom_id', type: 'UUID',
      required: false, description: 'Unit of measure for MOQ',
      sortOrder: 7, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-8` },
    update: {},
    create: {
      id: `seed-0-8-1-8`,
      name: 'sourcing_status', type: 'Enum(Preferred|Approved|Backup|Disqualified)',
      required: true, description: 'Sourcing approval status',
      sortOrder: 8, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-9` },
    update: {},
    create: {
      id: `seed-0-8-1-9`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of validity period',
      sortOrder: 9, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-10` },
    update: {},
    create: {
      id: `seed-0-8-1-10`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of validity period',
      sortOrder: 10, entityId: ent_0_8_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-8-1-11` },
    update: {},
    create: {
      id: `seed-0-8-1-11`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this sourcing relationship is active',
      sortOrder: 11, entityId: ent_0_8_1.id,
    },
  });
  const sub_0_9 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Product Feature & Configuration Model' } },
    update: {},
    create: { name: 'Product Feature & Configuration Model', modelId: model_0.id, sortOrder: 9 },
  });
  const ent_0_9_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_9.id, name: `Configuration Feature` } },
    update: {},
    create: {
      name: `Configuration Feature`,
      description: `=VLOOKUP(D51, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_9.id,
      relationships: [{"name":"belongs_to","target":"Product Configuration Model","cardinality":"M:1","type":"Association","description":"A configuration feature belongs to a specific configuration model"},{"name":"maps_to_standard","target":"Product Category Feature","cardinality":"M:1","type":"Association","description":"A configuration feature may optionally map to a standards-based Product Category Feature (GS1, ECLASS)"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-0` },
    update: {},
    create: {
      id: `seed-0-9-0-0`,
      name: 'config_feature_id', type: 'String',
      required: true, description: 'Unique identifier for the configuration feature',
      sortOrder: 0, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-1` },
    update: {},
    create: {
      id: `seed-0-9-0-1`,
      name: 'config_model_id', type: 'String',
      required: true, description: 'FK to the parent Product Configuration Model',
      sortOrder: 1, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-2` },
    update: {},
    create: {
      id: `seed-0-9-0-2`,
      name: 'feature_code', type: 'String',
      required: true, description: 'Short code for the feature (e.g. CPU, RAM, DISPLAY)',
      sortOrder: 2, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-3` },
    update: {},
    create: {
      id: `seed-0-9-0-3`,
      name: 'feature_name', type: 'String',
      required: true, description: 'Display name (e.g. Processor, Memory, Screen Size)',
      sortOrder: 3, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-4` },
    update: {},
    create: {
      id: `seed-0-9-0-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of this feature and what it controls',
      sortOrder: 4, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-5` },
    update: {},
    create: {
      id: `seed-0-9-0-5`,
      name: 'feature_type', type: 'Enum(Selection|Numeric|Text|Boolean)',
      required: true, description: 'Input type: Selection = pick from predefined options; Numeric = enter a value; Text = free text; Boolean = yes/no',
      sortOrder: 5, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-6` },
    update: {},
    create: {
      id: `seed-0-9-0-6`,
      name: 'is_required', type: 'Boolean',
      required: true, description: 'Whether the customer must make a selection for this feature',
      sortOrder: 6, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-7` },
    update: {},
    create: {
      id: `seed-0-9-0-7`,
      name: 'sort_order', type: 'Integer',
      required: false, description: 'Display order in the configurator UI',
      sortOrder: 7, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-8` },
    update: {},
    create: {
      id: `seed-0-9-0-8`,
      name: 'default_option_id', type: 'String',
      required: false, description: 'FK to the default Configuration Option (pre-selected)',
      sortOrder: 8, entityId: ent_0_9_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-0-9` },
    update: {},
    create: {
      id: `seed-0-9-0-9`,
      name: 'product_category_feature_id', type: 'String',
      required: false, description: 'FK to Product Category Feature (World Model) if a standards mapping exists',
      sortOrder: 9, entityId: ent_0_9_0.id,
    },
  });
  const ent_0_9_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_9.id, name: `Configuration Option` } },
    update: {},
    create: {
      name: `Configuration Option`,
      description: `=VLOOKUP(D52, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_9.id,
      relationships: [{"name":"belongs_to","target":"Configuration Feature","cardinality":"M:1","type":"Association","description":"A configuration option is an allowed value for a configuration feature"},{"name":"resolves_to","target":"Item","cardinality":"M:1","type":"Association","description":"A configuration option resolves to an Item that gets included in the BOM when the option is selected"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-0` },
    update: {},
    create: {
      id: `seed-0-9-1-0`,
      name: 'config_option_id', type: 'String',
      required: true, description: 'Unique identifier for the configuration option',
      sortOrder: 0, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-1` },
    update: {},
    create: {
      id: `seed-0-9-1-1`,
      name: 'config_feature_id', type: 'String',
      required: true, description: 'FK to the parent Configuration Feature',
      sortOrder: 1, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-2` },
    update: {},
    create: {
      id: `seed-0-9-1-2`,
      name: 'option_code', type: 'String',
      required: true, description: 'Short code (e.g. i5_13400, 16GB_DDR5)',
      sortOrder: 2, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-3` },
    update: {},
    create: {
      id: `seed-0-9-1-3`,
      name: 'option_name', type: 'String',
      required: true, description: 'Display name (e.g. Intel Core i5-13400, 16GB DDR5-5600)',
      sortOrder: 3, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-4` },
    update: {},
    create: {
      id: `seed-0-9-1-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of this option',
      sortOrder: 4, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-5` },
    update: {},
    create: {
      id: `seed-0-9-1-5`,
      name: 'price_impact', type: 'Decimal',
      required: false, description: 'Price delta from base (positive = surcharge, negative = discount)',
      sortOrder: 5, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-6` },
    update: {},
    create: {
      id: `seed-0-9-1-6`,
      name: 'lead_time_impact_days', type: 'Integer',
      required: false, description: 'Additional lead time in days when this option is selected',
      sortOrder: 6, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-7` },
    update: {},
    create: {
      id: `seed-0-9-1-7`,
      name: 'item_id', type: 'String',
      required: false, description: 'FK to the Item (component/assembly) that this option resolves to in the BOM',
      sortOrder: 7, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-8` },
    update: {},
    create: {
      id: `seed-0-9-1-8`,
      name: 'sort_order', type: 'Integer',
      required: false, description: 'Display order within the feature',
      sortOrder: 8, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-9` },
    update: {},
    create: {
      id: `seed-0-9-1-9`,
      name: 'status', type: 'Enum(Active|Inactive|EndOfLife)',
      required: true, description: 'Whether this option is currently available for selection',
      sortOrder: 9, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-10` },
    update: {},
    create: {
      id: `seed-0-9-1-10`,
      name: 'effective_date', type: 'Date',
      required: false, description: 'Date this option becomes available',
      sortOrder: 10, entityId: ent_0_9_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-1-11` },
    update: {},
    create: {
      id: `seed-0-9-1-11`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this option is retired',
      sortOrder: 11, entityId: ent_0_9_1.id,
    },
  });
  const ent_0_9_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_9.id, name: `Configuration Option Item Mapping` } },
    update: {},
    create: {
      name: `Configuration Option Item Mapping`,
      description: `=VLOOKUP(D53, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_9.id,
      relationships: [{"name":"maps_option","target":"Configuration Option","cardinality":"M:1","type":"Association","description":"An item mapping record references a configuration option"},{"name":"maps_item","target":"Item","cardinality":"M:1","type":"Association","description":"An item mapping record references the Item to be added to the BOM"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-2-0` },
    update: {},
    create: {
      id: `seed-0-9-2-0`,
      name: 'mapping_id', type: 'String',
      required: true, description: 'Unique identifier for the mapping',
      sortOrder: 0, entityId: ent_0_9_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-2-1` },
    update: {},
    create: {
      id: `seed-0-9-2-1`,
      name: 'config_option_id', type: 'String',
      required: true, description: 'FK to the Configuration Option',
      sortOrder: 1, entityId: ent_0_9_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-2-2` },
    update: {},
    create: {
      id: `seed-0-9-2-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'FK to the Item added to the BOM when this option is selected',
      sortOrder: 2, entityId: ent_0_9_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-2-3` },
    update: {},
    create: {
      id: `seed-0-9-2-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Quantity of this item per unit',
      sortOrder: 3, entityId: ent_0_9_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-2-4` },
    update: {},
    create: {
      id: `seed-0-9-2-4`,
      name: 'is_primary', type: 'Boolean',
      required: true, description: 'Whether this is the primary item for the option (vs. ancillary)',
      sortOrder: 4, entityId: ent_0_9_2.id,
    },
  });
  const ent_0_9_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_9.id, name: `Configuration Rule` } },
    update: {},
    create: {
      name: `Configuration Rule`,
      description: `=VLOOKUP(D54, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_9.id,
      relationships: [{"name":"belongs_to","target":"Product Configuration Model","cardinality":"M:1","type":"Association","description":"A configuration rule belongs to a specific configuration model"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-0` },
    update: {},
    create: {
      id: `seed-0-9-3-0`,
      name: 'config_rule_id', type: 'String',
      required: true, description: 'Unique identifier for the rule',
      sortOrder: 0, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-1` },
    update: {},
    create: {
      id: `seed-0-9-3-1`,
      name: 'config_model_id', type: 'String',
      required: true, description: 'FK to the Product Configuration Model this rule belongs to',
      sortOrder: 1, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-2` },
    update: {},
    create: {
      id: `seed-0-9-3-2`,
      name: 'rule_name', type: 'String',
      required: true, description: 'Short descriptive name for the rule',
      sortOrder: 2, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-3` },
    update: {},
    create: {
      id: `seed-0-9-3-3`,
      name: 'rule_type', type: 'Enum(Requires|Excludes|Defaults|PriceOverride|Recommends)',
      required: true, description: 'Type of constraint: Requires = if A then must B; Excludes = if A then cannot B; Defaults = if A then default B; PriceOverride = special price for combination; Recommends = soft suggestion',
      sortOrder: 3, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-4` },
    update: {},
    create: {
      id: `seed-0-9-3-4`,
      name: 'condition_expression', type: 'String',
      required: true, description: 'Boolean expression defining when the rule fires (e.g. \"RAM.option_code IN (32GB_DDR5, 64GB_DDR5)\")',
      sortOrder: 4, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-5` },
    update: {},
    create: {
      id: `seed-0-9-3-5`,
      name: 'action_expression', type: 'String',
      required: true, description: 'What happens when the rule fires (e.g. \"CPU.options RESTRICT_TO (i7_13700, i9_13900)\")',
      sortOrder: 5, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-6` },
    update: {},
    create: {
      id: `seed-0-9-3-6`,
      name: 'priority', type: 'Integer',
      required: false, description: 'Evaluation priority when multiple rules conflict (lower = higher priority)',
      sortOrder: 6, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-7` },
    update: {},
    create: {
      id: `seed-0-9-3-7`,
      name: 'is_hard_constraint', type: 'Boolean',
      required: true, description: 'True = must be enforced (invalid config if violated); False = soft/advisory',
      sortOrder: 7, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-8` },
    update: {},
    create: {
      id: `seed-0-9-3-8`,
      name: 'description', type: 'String',
      required: false, description: 'Human-readable explanation of the rule for documentation',
      sortOrder: 8, entityId: ent_0_9_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-3-9` },
    update: {},
    create: {
      id: `seed-0-9-3-9`,
      name: 'status', type: 'Enum(Active|Inactive|Draft)',
      required: true, description: 'Whether the rule is currently enforced',
      sortOrder: 9, entityId: ent_0_9_3.id,
    },
  });
  const ent_0_9_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_9.id, name: `Product Configuration Model` } },
    update: {},
    create: {
      name: `Product Configuration Model`,
      description: `=VLOOKUP(D55, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_9.id,
      relationships: [{"name":"configures","target":"Product","cardinality":"M:1","type":"Association","description":"A configuration model defines the configurable schema for a Product (CTO/ETO)"},{"name":"base_item","target":"Item","cardinality":"M:1","type":"Association","description":"A configuration model may reference a base Item (platform/chassis) shared by all configurations"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-0` },
    update: {},
    create: {
      id: `seed-0-9-4-0`,
      name: 'config_model_id', type: 'String',
      required: true, description: 'Unique identifier for the configuration model',
      sortOrder: 0, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-1` },
    update: {},
    create: {
      id: `seed-0-9-4-1`,
      name: 'product_id', type: 'String',
      required: true, description: 'FK to the Product this configuration model belongs to. This product will be a higher product level that where the functional separations are captured (e.g. Product Category: Desktops, Notebooks, Mobile Phones, …)',
      sortOrder: 1, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-2` },
    update: {},
    create: {
      id: `seed-0-9-4-2`,
      name: 'config_model_name', type: 'String',
      required: true, description: 'Descriptive name (e.g. ThinkPad X1 Carbon Gen 12 Configurator)',
      sortOrder: 2, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-3` },
    update: {},
    create: {
      id: `seed-0-9-4-3`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of the configuration model',
      sortOrder: 3, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-4` },
    update: {},
    create: {
      id: `seed-0-9-4-4`,
      name: 'version', type: 'String',
      required: true, description: 'Version identifier (e.g. 2025.1)',
      sortOrder: 4, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-5` },
    update: {},
    create: {
      id: `seed-0-9-4-5`,
      name: 'status', type: 'Enum(Draft|Active|Superseded|Retired)',
      required: true, description: 'Lifecycle status of this configuration model version',
      sortOrder: 5, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-6` },
    update: {},
    create: {
      id: `seed-0-9-4-6`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this version becomes active',
      sortOrder: 6, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-7` },
    update: {},
    create: {
      id: `seed-0-9-4-7`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this version is retired',
      sortOrder: 7, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-8` },
    update: {},
    create: {
      id: `seed-0-9-4-8`,
      name: 'base_price', type: 'Decimal',
      required: false, description: 'Base price before any option selections',
      sortOrder: 8, entityId: ent_0_9_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-9-4-9` },
    update: {},
    create: {
      id: `seed-0-9-4-9`,
      name: 'base_item_id', type: 'String',
      required: false, description: 'FK to the base Item (platform/chassis) that all configurations share',
      sortOrder: 9, entityId: ent_0_9_4.id,
    },
  });
  const sub_0_10 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Market Model' } },
    update: {},
    create: { name: 'Market Model', modelId: model_0.id, sortOrder: 10 },
  });
  const ent_0_10_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_10.id, name: `Market Region` } },
    update: {},
    create: {
      name: `Market Region`,
      description: `=VLOOKUP(D56, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_10.id,
      relationships: [{"name":"composed of","target":"Market Geo-Region","cardinality":"1:M","type":"Composition","description":"A Market Region is composed of one or more standard Market Geo-Regions"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-0` },
    update: {},
    create: {
      id: `seed-0-10-0-0`,
      name: 'market_region_id', type: 'String',
      required: true, description: 'Unique identifier for the market region',
      sortOrder: 0, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-1` },
    update: {},
    create: {
      id: `seed-0-10-0-1`,
      name: 'region_code', type: 'String',
      required: true, description: 'Business code for the sales market region (e.g. SE_US, DACH, APAC_TIER1)',
      sortOrder: 1, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-2` },
    update: {},
    create: {
      id: `seed-0-10-0-2`,
      name: 'region_name', type: 'String',
      required: true, description: 'Descriptive name (e.g. Southeast US, DACH Region, APAC Tier 1)',
      sortOrder: 2, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-3` },
    update: {},
    create: {
      id: `seed-0-10-0-3`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of the region scope and purpose',
      sortOrder: 3, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-4` },
    update: {},
    create: {
      id: `seed-0-10-0-4`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to owning Organization Unit (the company defining this region)',
      sortOrder: 4, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-5` },
    update: {},
    create: {
      id: `seed-0-10-0-5`,
      name: 'region_type', type: 'Enum(SalesTerritory|DemandRegion|PricingZone|TradeArea|Custom)',
      required: true, description: 'Purpose classification of this market region',
      sortOrder: 5, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-6` },
    update: {},
    create: {
      id: `seed-0-10-0-6`,
      name: 'channel_scope', type: 'String',
      required: false, description: 'If the region is channel-specific (e.g. Retail, Foodservice, E-Commerce)',
      sortOrder: 6, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-7` },
    update: {},
    create: {
      id: `seed-0-10-0-7`,
      name: 'status', type: 'Enum(Active|Inactive|Planned)',
      required: true, description: 'Lifecycle status of the region definition',
      sortOrder: 7, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-8` },
    update: {},
    create: {
      id: `seed-0-10-0-8`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this region definition becomes effective',
      sortOrder: 8, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-9` },
    update: {},
    create: {
      id: `seed-0-10-0-9`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this region definition is retired (companies redraw territories)',
      sortOrder: 9, entityId: ent_0_10_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-0-10` },
    update: {},
    create: {
      id: `seed-0-10-0-10`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Default currency for this market region',
      sortOrder: 10, entityId: ent_0_10_0.id,
    },
  });
  const ent_0_10_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_10.id, name: `Market Segment` } },
    update: {},
    create: {
      name: `Market Segment`,
      description: `=VLOOKUP(D57, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_10.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-0` },
    update: {},
    create: {
      id: `seed-0-10-1-0`,
      name: 'market_segment_id', type: 'String',
      required: true, description: 'Unique indentifier for the market segment',
      sortOrder: 0, entityId: ent_0_10_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-1` },
    update: {},
    create: {
      id: `seed-0-10-1-1`,
      name: 'market_segment_name', type: 'String',
      required: true, description: 'Descriptive name of the market segment',
      sortOrder: 1, entityId: ent_0_10_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-2` },
    update: {},
    create: {
      id: `seed-0-10-1-2`,
      name: 'market_region_id', type: 'String',
      required: true, description: 'Code of the Market Region',
      sortOrder: 2, entityId: ent_0_10_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-3` },
    update: {},
    create: {
      id: `seed-0-10-1-3`,
      name: 'region_name', type: 'String',
      required: true, description: 'Descriptive name of the Market Region',
      sortOrder: 3, entityId: ent_0_10_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-4` },
    update: {},
    create: {
      id: `seed-0-10-1-4`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'Code of the Consumer Segment',
      sortOrder: 4, entityId: ent_0_10_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-10-1-5` },
    update: {},
    create: {
      id: `seed-0-10-1-5`,
      name: 'consumer_segment_name', type: 'String',
      required: true, description: 'Descriptive name of the Consumer Segment',
      sortOrder: 5, entityId: ent_0_10_1.id,
    },
  });
  const sub_0_11 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'Sales Model' } },
    update: {},
    create: { name: 'Sales Model', modelId: model_0.id, sortOrder: 11 },
  });
  const ent_0_11_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Channel` } },
    update: {},
    create: {
      name: `Channel`,
      description: `=VLOOKUP(D58, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_11.id,
      relationships: [{"name":"belongs to","target":"Sales Organization","cardinality":"M:1","type":"Association","description":"A Channel is owned by a Sales Organisation"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-0-0` },
    update: {},
    create: {
      id: `seed-0-11-0-0`,
      name: 'channel_id', type: 'String',
      required: true, description: 'Unique identifier for the channel',
      sortOrder: 0, entityId: ent_0_11_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-0-1` },
    update: {},
    create: {
      id: `seed-0-11-0-1`,
      name: 'channel_name', type: 'String',
      required: true, description: 'Name of the channel',
      sortOrder: 1, entityId: ent_0_11_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-0-2` },
    update: {},
    create: {
      id: `seed-0-11-0-2`,
      name: 'channel_type', type: 'Enum(Direct|Distributor|eCommerce|Retail|Wholesale|B2B)',
      required: true, description: 'Type of sales channel',
      sortOrder: 2, entityId: ent_0_11_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-0-3` },
    update: {},
    create: {
      id: `seed-0-11-0-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the channel and its characteristics',
      sortOrder: 3, entityId: ent_0_11_0.id,
    },
  });
  const ent_0_11_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Sales Domain` } },
    update: {},
    create: {
      name: `Sales Domain`,
      description: `=VLOOKUP(D59, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_11.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-1-0` },
    update: {},
    create: {
      id: `seed-0-11-1-0`,
      name: 'sales_domain_id', type: 'String',
      required: true, description: 'Unique identifier for the domain mapping',
      sortOrder: 0, entityId: ent_0_11_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-1-1` },
    update: {},
    create: {
      id: `seed-0-11-1-1`,
      name: 'sales_org_id', type: 'String',
      required: true, description: 'This is an org_unit_id',
      sortOrder: 1, entityId: ent_0_11_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-1-2` },
    update: {},
    create: {
      id: `seed-0-11-1-2`,
      name: 'sales_market_region_id', type: 'String',
      required: false, description: 'This is not mandatory by itself, but either of this or planning account is mandatory. It is a Sales Market Region in the case where the sales org is looking after the entire market region and all in that region',
      sortOrder: 2, entityId: ent_0_11_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-1-3` },
    update: {},
    create: {
      id: `seed-0-11-1-3`,
      name: 'account_id', type: 'String',
      required: false, description: 'This is not mandatory by itself, but either of this or sales_market_region_id is mandatory. The account_id is of the Planning Account',
      sortOrder: 3, entityId: ent_0_11_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-1-4` },
    update: {},
    create: {
      id: `seed-0-11-1-4`,
      name: 'product_id', type: 'String',
      required: true, description: '',
      sortOrder: 4, entityId: ent_0_11_1.id,
    },
  });
  const ent_0_11_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Sales Domain Hierarchy` } },
    update: {},
    create: {
      name: `Sales Domain Hierarchy`,
      description: `=VLOOKUP(D60, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_11.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-2-0` },
    update: {},
    create: {
      id: `seed-0-11-2-0`,
      name: 'sales_domain_hierarchy_id', type: 'String',
      required: true, description: 'Unique identifier for the demand record',
      sortOrder: 0, entityId: ent_0_11_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-2-1` },
    update: {},
    create: {
      id: `seed-0-11-2-1`,
      name: 'sales_domain_id', type: 'Enum(Forecast|ActualOrder|Opportunity|CustomerForecast|Statistical)',
      required: true, description: 'Type of demand record',
      sortOrder: 1, entityId: ent_0_11_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-2-2` },
    update: {},
    create: {
      id: `seed-0-11-2-2`,
      name: 'parent_sales_domain_id', type: 'String',
      required: true, description: 'Item to which this demand applies',
      sortOrder: 2, entityId: ent_0_11_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-2-3` },
    update: {},
    create: {
      id: `seed-0-11-2-3`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'Depth in the hierarchy (1 = root)',
      sortOrder: 3, entityId: ent_0_11_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-2-4` },
    update: {},
    create: {
      id: `seed-0-11-2-4`,
      name: 'level_name', type: 'String',
      required: true, description: 'Name of the level',
      sortOrder: 4, entityId: ent_0_11_2.id,
    },
  });
  const ent_0_11_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Sales Market Region Hierarchy` } },
    update: {},
    create: {
      name: `Sales Market Region Hierarchy`,
      description: `=VLOOKUP(D61, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_11.id,
      relationships: [{"name":"structures","target":"Market Region","cardinality":"M:1","type":"Association","description":"A hierarchy node references a Sales Market Region"},{"name":"parent_of","target":"Sales Market Region Hierarchy","cardinality":"1:M","type":"Self-Reference","description":"Sales Market Regions form a hierarchy (e.g. National > Division > District > Territory)"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-0` },
    update: {},
    create: {
      id: `seed-0-11-3-0`,
      name: 'hierarchy_id', type: 'String',
      required: true, description: 'Unique identifier for the hierarchy definition',
      sortOrder: 0, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-1` },
    update: {},
    create: {
      id: `seed-0-11-3-1`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Name of the hierarchy (e.g. PepsiCo US Sales Territories)',
      sortOrder: 1, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-2` },
    update: {},
    create: {
      id: `seed-0-11-3-2`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to owning Organization Unit',
      sortOrder: 2, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-3` },
    update: {},
    create: {
      id: `seed-0-11-3-3`,
      name: 'market_region_id', type: 'String',
      required: true, description: 'FK to the Sales Market Region node in this hierarchy',
      sortOrder: 3, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-4` },
    update: {},
    create: {
      id: `seed-0-11-3-4`,
      name: 'parent_market_region_id', type: 'String',
      required: false, description: 'FK to parent Sales Market Region (null for root)',
      sortOrder: 4, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-5` },
    update: {},
    create: {
      id: `seed-0-11-3-5`,
      name: 'level_name', type: 'String',
      required: true, description: 'Name of this level (e.g. National, Division, District, Territory)',
      sortOrder: 5, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-6` },
    update: {},
    create: {
      id: `seed-0-11-3-6`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'Depth with 1 = top level',
      sortOrder: 6, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-7` },
    update: {},
    create: {
      id: `seed-0-11-3-7`,
      name: 'sort_order', type: 'Integer',
      required: false, description: 'Display order within siblings',
      sortOrder: 7, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-8` },
    update: {},
    create: {
      id: `seed-0-11-3-8`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this hierarchy version is effective',
      sortOrder: 8, entityId: ent_0_11_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-3-9` },
    update: {},
    create: {
      id: `seed-0-11-3-9`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this hierarchy version is retired',
      sortOrder: 9, entityId: ent_0_11_3.id,
    },
  });
  const ent_0_11_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Sales Market Region Mapping` } },
    update: {},
    create: {
      name: `Sales Market Region Mapping`,
      description: `=VLOOKUP(D62, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_11.id,
      relationships: [{"name":"maps_region","target":"Market Region","cardinality":"M:1","type":"Association","description":"A mapping record references a Sales Market Region"},{"name":"maps_geo","target":"Market Geo-Region","cardinality":"M:1","type":"Association","description":"A mapping record references a standards-based Market Geo-Region, grounding commercial geography in neutral data"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-0` },
    update: {},
    create: {
      id: `seed-0-11-4-0`,
      name: 'mapping_id', type: 'String',
      required: true, description: 'Unique identifier for the mapping record',
      sortOrder: 0, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-1` },
    update: {},
    create: {
      id: `seed-0-11-4-1`,
      name: 'sales_market_region_id', type: 'String',
      required: true, description: 'FK to the Sales Market Region',
      sortOrder: 1, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-2` },
    update: {},
    create: {
      id: `seed-0-11-4-2`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'FK to the standards-based Market Geo-Region',
      sortOrder: 2, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-3` },
    update: {},
    create: {
      id: `seed-0-11-4-3`,
      name: 'coverage_type', type: 'Enum(Full|Partial)',
      required: true, description: 'Whether the entire geo-region is included or only a part',
      sortOrder: 3, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-4` },
    update: {},
    create: {
      id: `seed-0-11-4-4`,
      name: 'coverage_notes', type: 'String',
      required: false, description: 'Clarification when coverage is partial (e.g. only urban areas, excluding postal code X)',
      sortOrder: 4, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-5` },
    update: {},
    create: {
      id: `seed-0-11-4-5`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this mapping is effective',
      sortOrder: 5, entityId: ent_0_11_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-4-6` },
    update: {},
    create: {
      id: `seed-0-11-4-6`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this mapping is retired',
      sortOrder: 6, entityId: ent_0_11_4.id,
    },
  });
  const ent_0_11_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_11.id, name: `Sales Organization` } },
    update: {},
    create: {
      name: `Sales Organization`,
      description: `Represents a sales organisational unit responsible for selling products within a defined market scope. Referenced by Unit Price, Channel, and Sales Header. Maps to a node in the Organisation hierarchy.`,
      subModelId: sub_0_11.id,
      relationships: [{"name":"is a node in","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"A Sales Organisation corresponds to an Organisation Unit"},{"name":"has parent","target":"Sales Organization","cardinality":"M:1","type":"Self-Reference","description":"Sales Organisations form a hierarchy"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-5-0` },
    update: {},
    create: {
      id: `seed-0-11-5-0`,
      name: 'sales_org_id', type: 'UUID',
      required: true, description: 'Unique identifier for the sales organisation',
      sortOrder: 0, entityId: ent_0_11_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-5-1` },
    update: {},
    create: {
      id: `seed-0-11-5-1`,
      name: 'sales_org_name', type: 'String',
      required: true, description: 'Name of the sales organisation',
      sortOrder: 1, entityId: ent_0_11_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-5-2` },
    update: {},
    create: {
      id: `seed-0-11-5-2`,
      name: 'currency_id', type: 'UUID',
      required: false, description: 'Default currency for this sales org',
      sortOrder: 2, entityId: ent_0_11_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-11-5-3` },
    update: {},
    create: {
      id: `seed-0-11-5-3`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this sales org is active',
      sortOrder: 3, entityId: ent_0_11_5.id,
    },
  });
  const sub_0_12 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_0.id, name: 'General' } },
    update: {},
    create: { name: 'General', modelId: model_0.id, sortOrder: 12 },
  });
  const ent_0_12_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_12.id, name: `Business Characteristic` } },
    update: {},
    create: {
      name: `Business Characteristic`,
      description: `=VLOOKUP(D63, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_12.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-0-0` },
    update: {},
    create: {
      id: `seed-0-12-0-0`,
      name: 'characteristic_id', type: 'String',
      required: true, description: 'Unique identifier for the business characteristic',
      sortOrder: 0, entityId: ent_0_12_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-0-1` },
    update: {},
    create: {
      id: `seed-0-12-0-1`,
      name: 'characteristic_name', type: 'String',
      required: true, description: 'Name of the characteristic (e.g. fulfillment model)',
      sortOrder: 1, entityId: ent_0_12_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-0-2` },
    update: {},
    create: {
      id: `seed-0-12-0-2`,
      name: 'characteristic_type', type: 'String',
      required: true, description: 'Type: Quantitative or Qualitative',
      sortOrder: 2, entityId: ent_0_12_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-0-3` },
    update: {},
    create: {
      id: `seed-0-12-0-3`,
      name: 'possible_values', type: 'String',
      required: false, description: 'Comma-separated list of possible values',
      sortOrder: 3, entityId: ent_0_12_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-0-4` },
    update: {},
    create: {
      id: `seed-0-12-0-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of what the characteristic measures',
      sortOrder: 4, entityId: ent_0_12_0.id,
    },
  });
  const ent_0_12_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_12.id, name: `Competitor` } },
    update: {},
    create: {
      name: `Competitor`,
      description: `=VLOOKUP(D64, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_12.id,
      relationships: [{"name":"is","target":"Market Organization","cardinality":"M:1","type":"Association","description":"A Competitor is a Market Organization"},{"name":"active in","target":"Market","cardinality":"M:1","type":"Association","description":"A Competitor is active in a specific Market"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-1-0` },
    update: {},
    create: {
      id: `seed-0-12-1-0`,
      name: 'competitor_id', type: 'String',
      required: true, description: 'Unique identifier for the competitor record',
      sortOrder: 0, entityId: ent_0_12_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-1-1` },
    update: {},
    create: {
      id: `seed-0-12-1-1`,
      name: 'market_org_id', type: 'String',
      required: true, description: 'Market organisation representing the competitor',
      sortOrder: 1, entityId: ent_0_12_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-1-2` },
    update: {},
    create: {
      id: `seed-0-12-1-2`,
      name: 'market_id', type: 'String',
      required: true, description: 'Market in which this competitor is active',
      sortOrder: 2, entityId: ent_0_12_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-1-3` },
    update: {},
    create: {
      id: `seed-0-12-1-3`,
      name: 'is_primary', type: 'Boolean',
      required: false, description: 'Whether this is considered a primary competitor',
      sortOrder: 3, entityId: ent_0_12_1.id,
    },
  });
  const ent_0_12_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_12.id, name: `Discount Data` } },
    update: {},
    create: {
      name: `Discount Data`,
      description: `=VLOOKUP(D65, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_12.id,
      relationships: [{"name":"part of","target":"Discount Master","cardinality":"M:1","type":"Association","description":"Discount Data is a tier/bracket within a Discount Master"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-0` },
    update: {},
    create: {
      id: `seed-0-12-2-0`,
      name: 'discount_data_id', type: 'String',
      required: true, description: 'Unique identifier for the discount tier',
      sortOrder: 0, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-1` },
    update: {},
    create: {
      id: `seed-0-12-2-1`,
      name: 'discount_id', type: 'String',
      required: true, description: 'Parent discount scheme',
      sortOrder: 1, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-2` },
    update: {},
    create: {
      id: `seed-0-12-2-2`,
      name: 'quantity_from', type: 'Decimal',
      required: false, description: 'Lower bound of the quantity tier',
      sortOrder: 2, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-3` },
    update: {},
    create: {
      id: `seed-0-12-2-3`,
      name: 'quantity_to', type: 'Decimal',
      required: false, description: 'Upper bound of the quantity tier',
      sortOrder: 3, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-4` },
    update: {},
    create: {
      id: `seed-0-12-2-4`,
      name: 'discount_pct', type: 'Decimal',
      required: false, description: 'Percentage discount for this tier',
      sortOrder: 4, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-5` },
    update: {},
    create: {
      id: `seed-0-12-2-5`,
      name: 'discount_amount', type: 'Decimal',
      required: false, description: 'Fixed amount discount for this tier',
      sortOrder: 5, entityId: ent_0_12_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-2-6` },
    update: {},
    create: {
      id: `seed-0-12-2-6`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Currency for the fixed discount amount',
      sortOrder: 6, entityId: ent_0_12_2.id,
    },
  });
  const ent_0_12_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_12.id, name: `Discount Master` } },
    update: {},
    create: {
      name: `Discount Master`,
      description: `=VLOOKUP(D66, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_12.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Discount Master can be scoped to an Item"},{"name":"for account","target":"Planning Account","cardinality":"M:1","type":"Association","description":"A Discount Master can be scoped to an Account"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-0` },
    update: {},
    create: {
      id: `seed-0-12-3-0`,
      name: 'discount_id', type: 'String',
      required: true, description: 'Unique identifier for the discount scheme',
      sortOrder: 0, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-1` },
    update: {},
    create: {
      id: `seed-0-12-3-1`,
      name: 'discount_name', type: 'String',
      required: true, description: 'Name of the discount scheme',
      sortOrder: 1, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-2` },
    update: {},
    create: {
      id: `seed-0-12-3-2`,
      name: 'discount_type', type: 'Enum(Volume|Trade|Promotional|Loyalty|Contractual)',
      required: true, description: 'Type of discount',
      sortOrder: 2, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-3` },
    update: {},
    create: {
      id: `seed-0-12-3-3`,
      name: 'item_id', type: 'String',
      required: false, description: 'Item to which the discount applies',
      sortOrder: 3, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-4` },
    update: {},
    create: {
      id: `seed-0-12-3-4`,
      name: 'account_id', type: 'String',
      required: false, description: 'Account to which the discount applies',
      sortOrder: 4, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-5` },
    update: {},
    create: {
      id: `seed-0-12-3-5`,
      name: 'valid_from', type: 'Date',
      required: true, description: 'Start of discount validity',
      sortOrder: 5, entityId: ent_0_12_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-3-6` },
    update: {},
    create: {
      id: `seed-0-12-3-6`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of discount validity',
      sortOrder: 6, entityId: ent_0_12_3.id,
    },
  });
  const ent_0_12_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_0_12.id, name: `Resource` } },
    update: {},
    create: {
      name: `Resource`,
      description: `=VLOOKUP(D67, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_0_12.id,
      relationships: [{"name":"located at","target":"Site","cardinality":"M:1","type":"Association","description":"A Resource is located at a Site"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-0` },
    update: {},
    create: {
      id: `seed-0-12-4-0`,
      name: 'resource_id', type: 'String',
      required: true, description: 'Unique identifier for the resource',
      sortOrder: 0, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-1` },
    update: {},
    create: {
      id: `seed-0-12-4-1`,
      name: 'resource_name', type: 'String',
      required: true, description: 'Name of the resource',
      sortOrder: 1, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-2` },
    update: {},
    create: {
      id: `seed-0-12-4-2`,
      name: 'resource_type', type: 'Enum(Machine|Labor|Tool|Facility)',
      required: true, description: 'Type of production resource',
      sortOrder: 2, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-3` },
    update: {},
    create: {
      id: `seed-0-12-4-3`,
      name: 'site_id', type: 'String',
      required: true, description: 'Site where the resource is located',
      sortOrder: 3, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-4` },
    update: {},
    create: {
      id: `seed-0-12-4-4`,
      name: 'capacity', type: 'Decimal',
      required: false, description: 'Available capacity of the resource per period',
      sortOrder: 4, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-5` },
    update: {},
    create: {
      id: `seed-0-12-4-5`,
      name: 'capacity_uom_id', type: 'String',
      required: false, description: 'Unit of measure for capacity',
      sortOrder: 5, entityId: ent_0_12_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-0-12-4-6` },
    update: {},
    create: {
      id: `seed-0-12-4-6`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the resource is active for planning',
      sortOrder: 6, entityId: ent_0_12_4.id,
    },
  });
  const model_1 = await prisma.ontologyModel.upsert({
    where: { name: 'Decision Model' },
    update: {},
    create: { name: 'Decision Model', color: '#8B5CF6', sortOrder: 1 },
  });
  const sub_1_0 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_1.id, name: 'Demand Model' } },
    update: {},
    create: { name: 'Demand Model', modelId: model_1.id, sortOrder: 0 },
  });
  const ent_1_0_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_0.id, name: `Customer Forecast` } },
    update: {},
    create: {
      name: `Customer Forecast`,
      description: `=VLOOKUP(D68, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_0.id,
      relationships: [{"name":"submitted by","target":"Enterprise Customer","cardinality":"M:1","type":"Association","description":"A Customer Forecast is submitted by a Customer"},{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Customer Forecast is for a specific Item"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-0` },
    update: {},
    create: {
      id: `seed-1-0-0-0`,
      name: 'customer_forecast_id', type: 'String',
      required: true, description: 'Unique identifier for the customer forecast',
      sortOrder: 0, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-1` },
    update: {},
    create: {
      id: `seed-1-0-0-1`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Customer submitting the forecast',
      sortOrder: 1, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-2` },
    update: {},
    create: {
      id: `seed-1-0-0-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being forecast',
      sortOrder: 2, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-3` },
    update: {},
    create: {
      id: `seed-1-0-0-3`,
      name: 'location_id', type: 'String',
      required: false, description: 'Ship-to location for the forecast',
      sortOrder: 3, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-4` },
    update: {},
    create: {
      id: `seed-1-0-0-4`,
      name: 'period', type: 'Date',
      required: true, description: 'Planning period of the forecast',
      sortOrder: 4, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-5` },
    update: {},
    create: {
      id: `seed-1-0-0-5`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Forecast quantity',
      sortOrder: 5, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-6` },
    update: {},
    create: {
      id: `seed-1-0-0-6`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure for the quantity',
      sortOrder: 6, entityId: ent_1_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-0-7` },
    update: {},
    create: {
      id: `seed-1-0-0-7`,
      name: 'submitted_date', type: 'Date',
      required: false, description: 'Date the forecast was submitted by the customer',
      sortOrder: 7, entityId: ent_1_0_0.id,
    },
  });
  const ent_1_0_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_0.id, name: `Demand Signal` } },
    update: {},
    create: {
      name: `Demand Signal`,
      description: `Bridge entity representing an external or internal demand signal that feeds into the forecasting process. Aggregates inputs from Customer Forecast, Channel Sell-out, and Opportunities into a unified signal for the Demand Plan.`,
      subModelId: sub_1_0.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"Signal applies to a specific Item"},{"name":"for account","target":"Planning Account","cardinality":"M:1","type":"Association","description":"Signal is associated with a Planning Account"},{"name":"feeds","target":"Demand Plan","cardinality":"M:1","type":"Association","description":"Signal contributes to a Demand Plan"},{"name":"sourced from","target":"Customer Forecast","cardinality":"M:1","type":"Association","description":"Signal may originate from a Customer Forecast"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-0` },
    update: {},
    create: {
      id: `seed-1-0-1-0`,
      name: 'signal_id', type: 'UUID',
      required: true, description: 'Unique identifier for the demand signal',
      sortOrder: 0, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-1` },
    update: {},
    create: {
      id: `seed-1-0-1-1`,
      name: 'signal_type', type: 'Enum(CustomerForecast|ChannelSellout|Opportunity|POS|ConsensusInput)',
      required: true, description: 'Type of demand signal',
      sortOrder: 1, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-2` },
    update: {},
    create: {
      id: `seed-1-0-1-2`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item to which the signal applies',
      sortOrder: 2, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-3` },
    update: {},
    create: {
      id: `seed-1-0-1-3`,
      name: 'location_id', type: 'UUID',
      required: true, description: 'Location for which the signal applies',
      sortOrder: 3, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-4` },
    update: {},
    create: {
      id: `seed-1-0-1-4`,
      name: 'account_id', type: 'UUID',
      required: false, description: 'Planning account associated with the signal',
      sortOrder: 4, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-5` },
    update: {},
    create: {
      id: `seed-1-0-1-5`,
      name: 'period', type: 'Date',
      required: true, description: 'Planning period of the signal',
      sortOrder: 5, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-6` },
    update: {},
    create: {
      id: `seed-1-0-1-6`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Signal quantity',
      sortOrder: 6, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-7` },
    update: {},
    create: {
      id: `seed-1-0-1-7`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 7, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-8` },
    update: {},
    create: {
      id: `seed-1-0-1-8`,
      name: 'confidence', type: 'Decimal',
      required: false, description: 'Confidence score of the signal (0-1)',
      sortOrder: 8, entityId: ent_1_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-0-1-9` },
    update: {},
    create: {
      id: `seed-1-0-1-9`,
      name: 'source_ref_id', type: 'UUID',
      required: false, description: 'Reference to the originating source record',
      sortOrder: 9, entityId: ent_1_0_1.id,
    },
  });
  const sub_1_1 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_1.id, name: 'Initiative Model' } },
    update: {},
    create: { name: 'Initiative Model', modelId: model_1.id, sortOrder: 1 },
  });
  const ent_1_1_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Customer Promo Initiative` } },
    update: {},
    create: {
      name: `Customer Promo Initiative`,
      description: `=VLOOKUP(D69, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"Customer Promo Initiative is a specialisation of Initiative"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-0-0` },
    update: {},
    create: {
      id: `seed-1-1-0-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-0-1` },
    update: {},
    create: {
      id: `seed-1-1-0-1`,
      name: 'customer_id', type: 'String',
      required: false, description: 'Target customer for the promotion',
      sortOrder: 1, entityId: ent_1_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-0-2` },
    update: {},
    create: {
      id: `seed-1-1-0-2`,
      name: 'promo_mechanics', type: 'String',
      required: false, description: 'Description of the promotion mechanics',
      sortOrder: 2, entityId: ent_1_1_0.id,
    },
  });
  const ent_1_1_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Development Initiative` } },
    update: {},
    create: {
      name: `Development Initiative`,
      description: `=VLOOKUP(D70, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"Development Initiative is a specialisation of Initiative"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-1-0` },
    update: {},
    create: {
      id: `seed-1-1-1-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-1-1` },
    update: {},
    create: {
      id: `seed-1-1-1-1`,
      name: 'dev_stage', type: 'String',
      required: false, description: 'Current development stage',
      sortOrder: 1, entityId: ent_1_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-1-2` },
    update: {},
    create: {
      id: `seed-1-1-1-2`,
      name: 'technology', type: 'String',
      required: false, description: 'Technology platform or domain',
      sortOrder: 2, entityId: ent_1_1_1.id,
    },
  });
  const ent_1_1_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Initiative` } },
    update: {},
    create: {
      name: `Initiative`,
      description: `=VLOOKUP(D71, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"owned by","target":"Employee","cardinality":"M:1","type":"Association","description":"An Initiative is owned by an Employee"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-0` },
    update: {},
    create: {
      id: `seed-1-1-2-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'Unique identifier for the initiative',
      sortOrder: 0, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-1` },
    update: {},
    create: {
      id: `seed-1-1-2-1`,
      name: 'initiative_name', type: 'String',
      required: true, description: 'Name of the initiative',
      sortOrder: 1, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-2` },
    update: {},
    create: {
      id: `seed-1-1-2-2`,
      name: 'initiative_type', type: 'Enum(TradePromo|NPI|CustomerPromo|Marketing|Research|Development|Other)',
      required: true, description: 'Type classification of the initiative',
      sortOrder: 2, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-3` },
    update: {},
    create: {
      id: `seed-1-1-2-3`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Planned start date of the initiative',
      sortOrder: 3, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-4` },
    update: {},
    create: {
      id: `seed-1-1-2-4`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Planned end date of the initiative',
      sortOrder: 4, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-5` },
    update: {},
    create: {
      id: `seed-1-1-2-5`,
      name: 'owner_id', type: 'String',
      required: false, description: 'Employee responsible for the initiative',
      sortOrder: 5, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-6` },
    update: {},
    create: {
      id: `seed-1-1-2-6`,
      name: 'status', type: 'Enum(Draft|Active|Completed|Cancelled)',
      required: true, description: 'Current lifecycle status of the initiative',
      sortOrder: 6, entityId: ent_1_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-2-7` },
    update: {},
    create: {
      id: `seed-1-1-2-7`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the initiative\'s objective',
      sortOrder: 7, entityId: ent_1_1_2.id,
    },
  });
  const ent_1_1_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Marketing Initiative` } },
    update: {},
    create: {
      name: `Marketing Initiative`,
      description: `=VLOOKUP(D72, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"Marketing Initiative is a specialisation of Initiative"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-3-0` },
    update: {},
    create: {
      id: `seed-1-1-3-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-3-1` },
    update: {},
    create: {
      id: `seed-1-1-3-1`,
      name: 'media_type', type: 'String',
      required: false, description: 'Media channel for the campaign (TV, Digital, Print)',
      sortOrder: 1, entityId: ent_1_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-3-2` },
    update: {},
    create: {
      id: `seed-1-1-3-2`,
      name: 'campaign_budget', type: 'Decimal',
      required: false, description: 'Total media spend budget',
      sortOrder: 2, entityId: ent_1_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-3-3` },
    update: {},
    create: {
      id: `seed-1-1-3-3`,
      name: 'target_segment_id', type: 'String',
      required: false, description: 'Target consumer segment',
      sortOrder: 3, entityId: ent_1_1_3.id,
    },
  });
  const ent_1_1_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `NPI Initiative` } },
    update: {},
    create: {
      name: `NPI Initiative`,
      description: `=VLOOKUP(D73, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"NPI Initiative is a specialisation of Initiative"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-4-0` },
    update: {},
    create: {
      id: `seed-1-1-4-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-4-1` },
    update: {},
    create: {
      id: `seed-1-1-4-1`,
      name: 'new_item_id', type: 'String',
      required: false, description: 'The new item being introduced',
      sortOrder: 1, entityId: ent_1_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-4-2` },
    update: {},
    create: {
      id: `seed-1-1-4-2`,
      name: 'gate_review_date', type: 'Date',
      required: false, description: 'Date of the stage-gate review',
      sortOrder: 2, entityId: ent_1_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-4-3` },
    update: {},
    create: {
      id: `seed-1-1-4-3`,
      name: 'commercialization_date', type: 'Date',
      required: false, description: 'Planned date of commercial availability',
      sortOrder: 3, entityId: ent_1_1_4.id,
    },
  });
  const ent_1_1_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Research Initiative` } },
    update: {},
    create: {
      name: `Research Initiative`,
      description: `=VLOOKUP(D74, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"Research Initiative is a specialisation of Initiative"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-5-0` },
    update: {},
    create: {
      id: `seed-1-1-5-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-5-1` },
    update: {},
    create: {
      id: `seed-1-1-5-1`,
      name: 'research_type', type: 'String',
      required: false, description: 'Type of research (Consumer, Market, Technology)',
      sortOrder: 1, entityId: ent_1_1_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-5-2` },
    update: {},
    create: {
      id: `seed-1-1-5-2`,
      name: 'hypothesis', type: 'String',
      required: false, description: 'Core hypothesis being tested',
      sortOrder: 2, entityId: ent_1_1_5.id,
    },
  });
  const ent_1_1_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_1.id, name: `Trade Promo Initiative` } },
    update: {},
    create: {
      name: `Trade Promo Initiative`,
      description: `=VLOOKUP(D75, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_1.id,
      relationships: [{"name":"extends","target":"Initiative","cardinality":"1:1","type":"Inheritance","description":"Trade Promo Initiative is a specialisation of Initiative"}],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-0` },
    update: {},
    create: {
      id: `seed-1-1-6-0`,
      name: 'initiative_id', type: 'String',
      required: true, description: 'FK to parent Initiative',
      sortOrder: 0, entityId: ent_1_1_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-1` },
    update: {},
    create: {
      id: `seed-1-1-6-1`,
      name: 'promo_type', type: 'String',
      required: true, description: 'Type of trade promotion (e.g. Off-invoice, Scan, Display)',
      sortOrder: 1, entityId: ent_1_1_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-2` },
    update: {},
    create: {
      id: `seed-1-1-6-2`,
      name: 'discount_pct', type: 'Decimal',
      required: false, description: 'Promotional discount percentage',
      sortOrder: 2, entityId: ent_1_1_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-3` },
    update: {},
    create: {
      id: `seed-1-1-6-3`,
      name: 'target_account_id', type: 'String',
      required: false, description: 'Target account for the promotion',
      sortOrder: 3, entityId: ent_1_1_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-4` },
    update: {},
    create: {
      id: `seed-1-1-6-4`,
      name: 'target_item_id', type: 'String',
      required: false, description: 'Target item for the promotion',
      sortOrder: 4, entityId: ent_1_1_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-1-6-5` },
    update: {},
    create: {
      id: `seed-1-1-6-5`,
      name: 'budget', type: 'Decimal',
      required: false, description: 'Total budget allocated to the promotion',
      sortOrder: 5, entityId: ent_1_1_6.id,
    },
  });
  const sub_1_2 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_1.id, name: 'Plan Model' } },
    update: {},
    create: { name: 'Plan Model', modelId: model_1.id, sortOrder: 2 },
  });
  const ent_1_2_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Pegging Graphs` } },
    update: {},
    create: {
      name: `Pegging Graphs`,
      description: `=VLOOKUP(D76, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  const ent_1_2_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Plan` } },
    update: {},
    create: {
      name: `Plan`,
      description: `=VLOOKUP(D77, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"uses decision model","target":"Decision Model","cardinality":"M:1","type":"Association","description":"A Plan is executed using a Decision Model"},{"name":"under process","target":"Process","cardinality":"M:1","type":"Association","description":"A Plan is created within a Business Process"},{"name":"uses time bucket","target":"Time Bucket","cardinality":"M:1","type":"Association","description":"A Plan uses a specific Time Bucket"},{"name":"over horizon","target":"Planning Horizon","cardinality":"M:1","type":"Association","description":"A Plan spans a Planning Horizon"},{"name":"owned by","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Every Plan is owned by an Organisation Unit"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-0` },
    update: {},
    create: {
      id: `seed-1-2-1-0`,
      name: 'plan_id', type: 'String',
      required: true, description: 'Unique identifier for the plan',
      sortOrder: 0, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-1` },
    update: {},
    create: {
      id: `seed-1-2-1-1`,
      name: 'plan_name', type: 'String',
      required: true, description: 'Name of the plan',
      sortOrder: 1, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-2` },
    update: {},
    create: {
      id: `seed-1-2-1-2`,
      name: 'plan_type', type: 'Enum(Demand|Supply|Distribution|Inventory|Production|Procurement|Fulfillment)',
      required: true, description: 'Type of plan',
      sortOrder: 2, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-3` },
    update: {},
    create: {
      id: `seed-1-2-1-3`,
      name: 'decision_model_id', type: 'String',
      required: false, description: 'Decision model used for this plan',
      sortOrder: 3, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-4` },
    update: {},
    create: {
      id: `seed-1-2-1-4`,
      name: 'process_id', type: 'String',
      required: false, description: 'Business process under which this plan was created',
      sortOrder: 4, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-5` },
    update: {},
    create: {
      id: `seed-1-2-1-5`,
      name: 'time_bucket_id', type: 'String',
      required: false, description: 'Time granularity of the plan',
      sortOrder: 5, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-6` },
    update: {},
    create: {
      id: `seed-1-2-1-6`,
      name: 'planning_horizon_id', type: 'String',
      required: false, description: 'Planning horizon of this plan',
      sortOrder: 6, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-7` },
    update: {},
    create: {
      id: `seed-1-2-1-7`,
      name: 'version', type: 'String',
      required: false, description: 'Version identifier of the plan',
      sortOrder: 7, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-8` },
    update: {},
    create: {
      id: `seed-1-2-1-8`,
      name: 'status', type: 'Enum(Draft|Active|Approved|Archived)',
      required: true, description: 'Lifecycle status of the plan',
      sortOrder: 8, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-9` },
    update: {},
    create: {
      id: `seed-1-2-1-9`,
      name: 'created_by', type: 'String',
      required: false, description: 'User who created the plan',
      sortOrder: 9, entityId: ent_1_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-1-10` },
    update: {},
    create: {
      id: `seed-1-2-1-10`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the plan was created',
      sortOrder: 10, entityId: ent_1_2_1.id,
    },
  });
  const ent_1_2_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Plan Lineage` } },
    update: {},
    create: {
      name: `Plan Lineage`,
      description: `=VLOOKUP(D78, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"child plan","target":"Plan","cardinality":"M:1","type":"Association","description":"Plan Lineage links a child Plan"},{"name":"parent plan","target":"Plan","cardinality":"M:1","type":"Association","description":"Plan Lineage links to its parent Plan"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-0` },
    update: {},
    create: {
      id: `seed-1-2-2-0`,
      name: 'lineage_id', type: 'String',
      required: true, description: 'Unique identifier for the plan lineage record',
      sortOrder: 0, entityId: ent_1_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-1` },
    update: {},
    create: {
      id: `seed-1-2-2-1`,
      name: 'plan_id', type: 'String',
      required: true, description: 'The child plan in the lineage',
      sortOrder: 1, entityId: ent_1_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-2` },
    update: {},
    create: {
      id: `seed-1-2-2-2`,
      name: 'parent_plan_id', type: 'String',
      required: false, description: 'The parent plan from which this plan was derived',
      sortOrder: 2, entityId: ent_1_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-3` },
    update: {},
    create: {
      id: `seed-1-2-2-3`,
      name: 'lineage_type', type: 'Enum(Version|Scenario|Baseline|Revision)',
      required: true, description: 'Type of lineage relationship',
      sortOrder: 3, entityId: ent_1_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-4` },
    update: {},
    create: {
      id: `seed-1-2-2-4`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the lineage record was created',
      sortOrder: 4, entityId: ent_1_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-2-5` },
    update: {},
    create: {
      id: `seed-1-2-2-5`,
      name: 'description', type: 'String',
      required: false, description: 'Description of how this plan differs from its parent',
      sortOrder: 5, entityId: ent_1_2_2.id,
    },
  });
  const ent_1_2_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Planning Horizon` } },
    update: {},
    create: {
      name: `Planning Horizon`,
      description: `=VLOOKUP(D79, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"uses time bucket","target":"Time Bucket","cardinality":"M:1","type":"Association","description":"A Planning Horizon is defined in terms of a Time Bucket"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-3-0` },
    update: {},
    create: {
      id: `seed-1-2-3-0`,
      name: 'horizon_id', type: 'String',
      required: true, description: 'Unique identifier for the planning horizon',
      sortOrder: 0, entityId: ent_1_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-3-1` },
    update: {},
    create: {
      id: `seed-1-2-3-1`,
      name: 'horizon_name', type: 'String',
      required: true, description: 'Name of the horizon (e.g. 18-Month Rolling)',
      sortOrder: 1, entityId: ent_1_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-3-2` },
    update: {},
    create: {
      id: `seed-1-2-3-2`,
      name: 'horizon_type', type: 'Enum(Short|Medium|Long|Rolling)',
      required: true, description: 'Classification of the horizon length',
      sortOrder: 2, entityId: ent_1_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-3-3` },
    update: {},
    create: {
      id: `seed-1-2-3-3`,
      name: 'total_periods', type: 'Integer',
      required: true, description: 'Total number of periods in the horizon',
      sortOrder: 3, entityId: ent_1_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-3-4` },
    update: {},
    create: {
      id: `seed-1-2-3-4`,
      name: 'time_bucket_id', type: 'String',
      required: true, description: 'Time bucket used in this horizon',
      sortOrder: 4, entityId: ent_1_2_3.id,
    },
  });
  const ent_1_2_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Planning Horizon Detail` } },
    update: {},
    create: {
      name: `Planning Horizon Detail`,
      description: `=VLOOKUP(D80, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"period of","target":"Planning Horizon","cardinality":"M:1","type":"Association","description":"A Planning Horizon Detail is a period within a Horizon"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-0` },
    update: {},
    create: {
      id: `seed-1-2-4-0`,
      name: 'detail_id', type: 'String',
      required: true, description: 'Unique identifier for the horizon detail record',
      sortOrder: 0, entityId: ent_1_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-1` },
    update: {},
    create: {
      id: `seed-1-2-4-1`,
      name: 'horizon_id', type: 'String',
      required: true, description: 'Parent planning horizon',
      sortOrder: 1, entityId: ent_1_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-2` },
    update: {},
    create: {
      id: `seed-1-2-4-2`,
      name: 'period_number', type: 'Integer',
      required: true, description: 'Sequential period number within the horizon',
      sortOrder: 2, entityId: ent_1_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-3` },
    update: {},
    create: {
      id: `seed-1-2-4-3`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Start date of this period',
      sortOrder: 3, entityId: ent_1_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-4` },
    update: {},
    create: {
      id: `seed-1-2-4-4`,
      name: 'end_date', type: 'Date',
      required: true, description: 'End date of this period',
      sortOrder: 4, entityId: ent_1_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-4-5` },
    update: {},
    create: {
      id: `seed-1-2-4-5`,
      name: 'time_bucket_id', type: 'String',
      required: false, description: 'Time bucket for this period (may differ across horizon zones)',
      sortOrder: 5, entityId: ent_1_2_4.id,
    },
  });
  const ent_1_2_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Long Range Plan` } },
    update: {},
    create: {
      name: `Long Range Plan`,
      description: `=VLOOKUP(D81, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Top Level Plan',
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Long Range Plan is a specialisation of Plan"},{"name":"owned by","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"LRP is owned by an Organisation Unit"},{"name":"informs","target":"Annual Operating Plan","cardinality":"1:M","type":"Association","description":"LRP sets strategic direction for the Annual Operating Plan"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-5-0` },
    update: {},
    create: {
      id: `seed-1-2-5-0`,
      name: 'lrp_id', type: 'String',
      required: true, description: 'Unique identifier for the LRP version',
      sortOrder: 0, entityId: ent_1_2_5.id,
    },
  });
  const ent_1_2_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Annual Operating Plan` } },
    update: {},
    create: {
      name: `Annual Operating Plan`,
      description: `=VLOOKUP(D82, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Top Level Plan',
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Annual Operating Plan is a specialisation of Plan"},{"name":"owned by","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"AOP is owned by an Organisation Unit"},{"name":"informs","target":"Integrated Business Plan","cardinality":"1:M","type":"Association","description":"AOP provides the annual baseline for IBP cycles"}],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-6-0` },
    update: {},
    create: {
      id: `seed-1-2-6-0`,
      name: 'aop_id', type: 'String',
      required: true, description: 'Unique identifier for the AOP version',
      sortOrder: 0, entityId: ent_1_2_6.id,
    },
  });
  const ent_1_2_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Integrated Business Plan` } },
    update: {},
    create: {
      name: `Integrated Business Plan`,
      description: `=VLOOKUP(D83, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Top Level Plan',
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Integrated Business Plan is a specialisation of Plan"},{"name":"owned by","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"IBP is owned by an Organisation Unit"},{"name":"produced by","target":"Planning Cycle","cardinality":"M:1","type":"Association","description":"IBP is produced within a Planning Cycle"}],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-7-0` },
    update: {},
    create: {
      id: `seed-1-2-7-0`,
      name: 'ibp_id', type: 'String',
      required: true, description: 'Unique identifier for the IBP cycle version',
      sortOrder: 0, entityId: ent_1_2_7.id,
    },
  });
  const ent_1_2_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Market Segment Plan` } },
    update: {},
    create: {
      name: `Market Segment Plan`,
      description: `=VLOOKUP(D84, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-8-0` },
    update: {},
    create: {
      id: `seed-1-2-8-0`,
      name: 'market_segment_plan_id', type: 'String',
      required: true, description: 'Unique identifier for the market segment plan',
      sortOrder: 0, entityId: ent_1_2_8.id,
    },
  });
  const ent_1_2_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Product Segment Plan` } },
    update: {},
    create: {
      name: `Product Segment Plan`,
      description: `=VLOOKUP(D85, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-9-0` },
    update: {},
    create: {
      id: `seed-1-2-9-0`,
      name: 'product_assortment_id', type: 'String',
      required: true, description: 'Unique udentifier for this product assortment for a particular market segment plan',
      sortOrder: 0, entityId: ent_1_2_9.id,
    },
  });
  const ent_1_2_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Forecast` } },
    update: {},
    create: {
      name: `Forecast`,
      description: `=VLOOKUP(D86, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Demand","cardinality":"1:1","type":"Inheritance","description":"Forecast is a specialisation of Demand"},{"name":"feeds into","target":"Demand Plan","cardinality":"M:1","type":"Association","description":"A Forecast feeds into a Demand Plan"}],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-10-0` },
    update: {},
    create: {
      id: `seed-1-2-10-0`,
      name: 'demand_id', type: 'String',
      required: true, description: 'FK to parent Demand record',
      sortOrder: 0, entityId: ent_1_2_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-10-1` },
    update: {},
    create: {
      id: `seed-1-2-10-1`,
      name: 'forecast_method', type: 'String',
      required: false, description: 'Algorithm or method used to generate the forecast',
      sortOrder: 1, entityId: ent_1_2_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-10-2` },
    update: {},
    create: {
      id: `seed-1-2-10-2`,
      name: 'confidence_interval', type: 'Decimal',
      required: false, description: 'Statistical confidence interval of the forecast',
      sortOrder: 2, entityId: ent_1_2_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-10-3` },
    update: {},
    create: {
      id: `seed-1-2-10-3`,
      name: 'plan_id', type: 'String',
      required: false, description: 'Plan in which this forecast was generated',
      sortOrder: 3, entityId: ent_1_2_10.id,
    },
  });
  const ent_1_2_11 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Demand Plan` } },
    update: {},
    create: {
      name: `Demand Plan`,
      description: `=VLOOKUP(D87, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Demand Plan is a specialisation of Plan"}],
      sortOrder: 11,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-0` },
    update: {},
    create: {
      id: `seed-1-2-11-0`,
      name: 'statistical_qty', type: 'Decimal',
      required: false, description: 'System-generated statistical baseline forecast quantity',
      sortOrder: 0, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-1` },
    update: {},
    create: {
      id: `seed-1-2-11-1`,
      name: 'consensus_qty', type: 'Decimal',
      required: false, description: 'Consensus-adjusted forecast quantity after review',
      sortOrder: 1, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-2` },
    update: {},
    create: {
      id: `seed-1-2-11-2`,
      name: 'override_qty', type: 'Decimal',
      required: false, description: 'Manual override quantity applied by planner',
      sortOrder: 2, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-3` },
    update: {},
    create: {
      id: `seed-1-2-11-3`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure for all quantities',
      sortOrder: 3, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-4` },
    update: {},
    create: {
      id: `seed-1-2-11-4`,
      name: 'currency_id', type: 'UUID',
      required: false, description: 'Currency for revenue-side demand values',
      sortOrder: 4, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-5` },
    update: {},
    create: {
      id: `seed-1-2-11-5`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item to which this demand plan row applies',
      sortOrder: 5, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-6` },
    update: {},
    create: {
      id: `seed-1-2-11-6`,
      name: 'location_id', type: 'UUID',
      required: true, description: 'Location to which this demand plan row applies',
      sortOrder: 6, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-7` },
    update: {},
    create: {
      id: `seed-1-2-11-7`,
      name: 'account_id', type: 'UUID',
      required: false, description: 'Planning account scope',
      sortOrder: 7, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-8` },
    update: {},
    create: {
      id: `seed-1-2-11-8`,
      name: 'period', type: 'Date',
      required: true, description: 'Planning period',
      sortOrder: 8, entityId: ent_1_2_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-11-9` },
    update: {},
    create: {
      id: `seed-1-2-11-9`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status of this demand plan row',
      sortOrder: 9, entityId: ent_1_2_11.id,
    },
  });
  const ent_1_2_12 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Inventory Policies Plan` } },
    update: {},
    create: {
      name: `Inventory Policies Plan`,
      description: `Describes stocking/replenishment policies by inventory node`,
      modelType: 'Policies Plan',
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 12,
    },
  });
  const ent_1_2_13 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Sourcing Policies Plan` } },
    update: {},
    create: {
      name: `Sourcing Policies Plan`,
      description: `Describes sourcing policies for each inventory node `,
      modelType: 'Policies Plan',
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 13,
    },
  });
  const ent_1_2_14 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Resource Utilization Policies Plan` } },
    update: {},
    create: {
      name: `Resource Utilization Policies Plan`,
      description: `Describes how resources are to be used - pre-build policies etc..`,
      modelType: 'Policies Plan',
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 14,
    },
  });
  const ent_1_2_15 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Demand Substitution Policies Plan` } },
    update: {},
    create: {
      name: `Demand Substitution Policies Plan`,
      description: `Describes policies on how a particular demand can be fulfilled using alternate products..etc`,
      modelType: 'Policies Plan',
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 15,
    },
  });
  const ent_1_2_16 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Allocation Policies` } },
    update: {},
    create: {
      name: `Allocation Policies`,
      description: `Describes policies on how constrained supply can be allocated across competing demand`,
      modelType: 'Policies Plan',
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 16,
    },
  });
  const ent_1_2_17 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Demand Fulfillment Plan` } },
    update: {},
    create: {
      name: `Demand Fulfillment Plan`,
      description: `=VLOOKUP(D93, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Demand Fulfillment Plan is a specialisation of Plan"}],
      sortOrder: 17,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-0` },
    update: {},
    create: {
      id: `seed-1-2-17-0`,
      name: 'demand_id', type: 'UUID',
      required: true, description: 'Demand record being fulfilled',
      sortOrder: 0, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-1` },
    update: {},
    create: {
      id: `seed-1-2-17-1`,
      name: 'confirmed_qty', type: 'Decimal',
      required: true, description: 'Confirmed fulfillable quantity',
      sortOrder: 1, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-2` },
    update: {},
    create: {
      id: `seed-1-2-17-2`,
      name: 'shortage_qty', type: 'Decimal',
      required: false, description: 'Quantity that cannot be fulfilled',
      sortOrder: 2, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-3` },
    update: {},
    create: {
      id: `seed-1-2-17-3`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 3, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-4` },
    update: {},
    create: {
      id: `seed-1-2-17-4`,
      name: 'supply_source_id', type: 'UUID',
      required: false, description: 'Supply activity or plan row fulfilling the demand',
      sortOrder: 4, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-5` },
    update: {},
    create: {
      id: `seed-1-2-17-5`,
      name: 'fulfillment_date', type: 'Date',
      required: true, description: 'Confirmed fulfillment date',
      sortOrder: 5, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-6` },
    update: {},
    create: {
      id: `seed-1-2-17-6`,
      name: 'allocation_priority', type: 'Integer',
      required: false, description: 'Priority ranking for allocation under constrained supply',
      sortOrder: 6, entityId: ent_1_2_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-17-7` },
    update: {},
    create: {
      id: `seed-1-2-17-7`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status',
      sortOrder: 7, entityId: ent_1_2_17.id,
    },
  });
  const ent_1_2_18 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Inventory Plan` } },
    update: {},
    create: {
      name: `Inventory Plan`,
      description: `=VLOOKUP(D94, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Inventory Plan is a specialisation of Plan"}],
      sortOrder: 18,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-0` },
    update: {},
    create: {
      id: `seed-1-2-18-0`,
      name: 'target_inventory', type: 'Decimal',
      required: true, description: 'Target inventory level for the period',
      sortOrder: 0, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-1` },
    update: {},
    create: {
      id: `seed-1-2-18-1`,
      name: 'safety_stock', type: 'Decimal',
      required: false, description: 'Safety stock target',
      sortOrder: 1, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-2` },
    update: {},
    create: {
      id: `seed-1-2-18-2`,
      name: 'reorder_point', type: 'Decimal',
      required: false, description: 'Reorder point quantity',
      sortOrder: 2, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-3` },
    update: {},
    create: {
      id: `seed-1-2-18-3`,
      name: 'days_of_supply', type: 'Decimal',
      required: false, description: 'Target days of supply',
      sortOrder: 3, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-4` },
    update: {},
    create: {
      id: `seed-1-2-18-4`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 4, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-5` },
    update: {},
    create: {
      id: `seed-1-2-18-5`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item',
      sortOrder: 5, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-6` },
    update: {},
    create: {
      id: `seed-1-2-18-6`,
      name: 'location_id', type: 'UUID',
      required: true, description: 'Location',
      sortOrder: 6, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-7` },
    update: {},
    create: {
      id: `seed-1-2-18-7`,
      name: 'period', type: 'Date',
      required: true, description: 'Planning period',
      sortOrder: 7, entityId: ent_1_2_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-18-8` },
    update: {},
    create: {
      id: `seed-1-2-18-8`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status',
      sortOrder: 8, entityId: ent_1_2_18.id,
    },
  });
  const ent_1_2_19 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Distribution Plan` } },
    update: {},
    create: {
      name: `Distribution Plan`,
      description: `=VLOOKUP(D95, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Distribution Plan is a specialisation of Plan"}],
      sortOrder: 19,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-0` },
    update: {},
    create: {
      id: `seed-1-2-19-0`,
      name: 'transfer_qty', type: 'Decimal',
      required: true, description: 'Planned transfer quantity',
      sortOrder: 0, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-1` },
    update: {},
    create: {
      id: `seed-1-2-19-1`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 1, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-2` },
    update: {},
    create: {
      id: `seed-1-2-19-2`,
      name: 'from_location_id', type: 'UUID',
      required: true, description: 'Source location',
      sortOrder: 2, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-3` },
    update: {},
    create: {
      id: `seed-1-2-19-3`,
      name: 'to_location_id', type: 'UUID',
      required: true, description: 'Destination location',
      sortOrder: 3, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-4` },
    update: {},
    create: {
      id: `seed-1-2-19-4`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item being transferred',
      sortOrder: 4, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-5` },
    update: {},
    create: {
      id: `seed-1-2-19-5`,
      name: 'period', type: 'Date',
      required: true, description: 'Planned transfer period',
      sortOrder: 5, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-6` },
    update: {},
    create: {
      id: `seed-1-2-19-6`,
      name: 'transport_mode_id', type: 'UUID',
      required: false, description: 'Transport mode for this transfer',
      sortOrder: 6, entityId: ent_1_2_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-19-7` },
    update: {},
    create: {
      id: `seed-1-2-19-7`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status',
      sortOrder: 7, entityId: ent_1_2_19.id,
    },
  });
  const ent_1_2_20 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Procurement Plan` } },
    update: {},
    create: {
      name: `Procurement Plan`,
      description: `=VLOOKUP(D96, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Procurement Plan is a specialisation of Plan"}],
      sortOrder: 20,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-0` },
    update: {},
    create: {
      id: `seed-1-2-20-0`,
      name: 'planned_qty', type: 'Decimal',
      required: true, description: 'Planned purchase quantity',
      sortOrder: 0, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-1` },
    update: {},
    create: {
      id: `seed-1-2-20-1`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 1, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-2` },
    update: {},
    create: {
      id: `seed-1-2-20-2`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item to be procured',
      sortOrder: 2, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-3` },
    update: {},
    create: {
      id: `seed-1-2-20-3`,
      name: 'supplier_id', type: 'UUID',
      required: false, description: 'Preferred supplier',
      sortOrder: 3, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-4` },
    update: {},
    create: {
      id: `seed-1-2-20-4`,
      name: 'receiving_site_id', type: 'UUID',
      required: true, description: 'Site receiving the goods',
      sortOrder: 4, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-5` },
    update: {},
    create: {
      id: `seed-1-2-20-5`,
      name: 'period', type: 'Date',
      required: true, description: 'Planned receipt period',
      sortOrder: 5, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-6` },
    update: {},
    create: {
      id: `seed-1-2-20-6`,
      name: 'planned_cost', type: 'Decimal',
      required: false, description: 'Planned procurement cost',
      sortOrder: 6, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-7` },
    update: {},
    create: {
      id: `seed-1-2-20-7`,
      name: 'currency_id', type: 'UUID',
      required: false, description: 'Currency for planned cost',
      sortOrder: 7, entityId: ent_1_2_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-20-8` },
    update: {},
    create: {
      id: `seed-1-2-20-8`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status',
      sortOrder: 8, entityId: ent_1_2_20.id,
    },
  });
  const ent_1_2_21 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Production Plan` } },
    update: {},
    create: {
      name: `Production Plan`,
      description: `=VLOOKUP(D97, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"extends","target":"Plan","cardinality":"1:1","type":"Inheritance","description":"Production Plan is a specialisation of Plan"}],
      sortOrder: 21,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-0` },
    update: {},
    create: {
      id: `seed-1-2-21-0`,
      name: 'planned_qty', type: 'Decimal',
      required: true, description: 'Planned production quantity',
      sortOrder: 0, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-1` },
    update: {},
    create: {
      id: `seed-1-2-21-1`,
      name: 'uom_id', type: 'UUID',
      required: true, description: 'Unit of measure',
      sortOrder: 1, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-2` },
    update: {},
    create: {
      id: `seed-1-2-21-2`,
      name: 'item_id', type: 'UUID',
      required: true, description: 'Item to be produced',
      sortOrder: 2, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-3` },
    update: {},
    create: {
      id: `seed-1-2-21-3`,
      name: 'site_id', type: 'UUID',
      required: true, description: 'Production site',
      sortOrder: 3, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-4` },
    update: {},
    create: {
      id: `seed-1-2-21-4`,
      name: 'period', type: 'Date',
      required: true, description: 'Production period',
      sortOrder: 4, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-5` },
    update: {},
    create: {
      id: `seed-1-2-21-5`,
      name: 'routing_id', type: 'UUID',
      required: false, description: 'Routing used for production',
      sortOrder: 5, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-6` },
    update: {},
    create: {
      id: `seed-1-2-21-6`,
      name: 'bom_id', type: 'UUID',
      required: false, description: 'Bill of Materials used',
      sortOrder: 6, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-7` },
    update: {},
    create: {
      id: `seed-1-2-21-7`,
      name: 'resource_id', type: 'UUID',
      required: false, description: 'Primary resource assigned',
      sortOrder: 7, entityId: ent_1_2_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-21-8` },
    update: {},
    create: {
      id: `seed-1-2-21-8`,
      name: 'approval_status', type: 'Enum(Draft|UnderReview|Approved|Locked)',
      required: true, description: 'Approval lifecycle status',
      sortOrder: 8, entityId: ent_1_2_21.id,
    },
  });
  const ent_1_2_22 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `RCA Graphs` } },
    update: {},
    create: {
      name: `RCA Graphs`,
      description: `=VLOOKUP(D98, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_2.id,
      relationships: [],
      sortOrder: 22,
    },
  });
  const ent_1_2_23 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_2.id, name: `Planning Cycle` } },
    update: {},
    create: {
      name: `Planning Cycle`,
      description: `Represents a named IBP/S&OP planning cadence that groups related Plans across the LRP → AOP → IBP hierarchy. Defines the review calendar, participating organisations, and the sequence of plan types produced in each cycle.`,
      subModelId: sub_1_2.id,
      relationships: [{"name":"owned by","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Cycle is owned by an Organisation Unit"},{"name":"produces","target":"Plan","cardinality":"1:M","type":"Composition","description":"A Planning Cycle produces one or more Plans"},{"name":"uses calendar","target":"Calendar","cardinality":"M:1","type":"Association","description":"Cycle is scheduled using a Calendar"}],
      sortOrder: 23,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-0` },
    update: {},
    create: {
      id: `seed-1-2-23-0`,
      name: 'cycle_id', type: 'UUID',
      required: true, description: 'Unique identifier for the planning cycle',
      sortOrder: 0, entityId: ent_1_2_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-1` },
    update: {},
    create: {
      id: `seed-1-2-23-1`,
      name: 'cycle_name', type: 'String',
      required: true, description: 'Name of the planning cycle (e.g. Jan-2026 IBP)',
      sortOrder: 1, entityId: ent_1_2_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-2` },
    update: {},
    create: {
      id: `seed-1-2-23-2`,
      name: 'cycle_type', type: 'Enum(LRP|AOP|IBP|SOP|Weekly)',
      required: true, description: 'Type of planning cycle',
      sortOrder: 2, entityId: ent_1_2_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-3` },
    update: {},
    create: {
      id: `seed-1-2-23-3`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Start date of the cycle',
      sortOrder: 3, entityId: ent_1_2_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-4` },
    update: {},
    create: {
      id: `seed-1-2-23-4`,
      name: 'end_date', type: 'Date',
      required: true, description: 'End date of the cycle',
      sortOrder: 4, entityId: ent_1_2_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-2-23-5` },
    update: {},
    create: {
      id: `seed-1-2-23-5`,
      name: 'status', type: 'Enum(Draft|InProgress|Completed|Locked)',
      required: true, description: 'Current status of the planning cycle',
      sortOrder: 5, entityId: ent_1_2_23.id,
    },
  });
  const sub_1_3 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_1.id, name: 'SC Transaction Model' } },
    update: {},
    create: { name: 'SC Transaction Model', modelId: model_1.id, sortOrder: 3 },
  });
  const ent_1_3_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Billing Header` } },
    update: {},
    create: {
      name: `Billing Header`,
      description: `=VLOOKUP(D99, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"bills","target":"Delivery Header","cardinality":"M:1","type":"Association","description":"A Billing Document bills a Delivery"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-0` },
    update: {},
    create: {
      id: `seed-1-3-0-0`,
      name: 'billing_id', type: 'String',
      required: true, description: 'Unique identifier for the billing document',
      sortOrder: 0, entityId: ent_1_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-1` },
    update: {},
    create: {
      id: `seed-1-3-0-1`,
      name: 'billing_date', type: 'Date',
      required: true, description: 'Date of the billing document',
      sortOrder: 1, entityId: ent_1_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-2` },
    update: {},
    create: {
      id: `seed-1-3-0-2`,
      name: 'delivery_id', type: 'String',
      required: false, description: 'Delivery being billed',
      sortOrder: 2, entityId: ent_1_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-3` },
    update: {},
    create: {
      id: `seed-1-3-0-3`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Bill-to customer',
      sortOrder: 3, entityId: ent_1_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-4` },
    update: {},
    create: {
      id: `seed-1-3-0-4`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Billing currency',
      sortOrder: 4, entityId: ent_1_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-0-5` },
    update: {},
    create: {
      id: `seed-1-3-0-5`,
      name: 'billing_type', type: 'Enum(Invoice|CreditMemo|DebitMemo|ProForma)',
      required: true, description: 'Type of billing document',
      sortOrder: 5, entityId: ent_1_3_0.id,
    },
  });
  const ent_1_3_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Billing Item` } },
    update: {},
    create: {
      name: `Billing Item`,
      description: `=VLOOKUP(D100, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"line of","target":"Billing Header","cardinality":"M:1","type":"Association","description":"A Billing Item is a line within a Billing Document"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-0` },
    update: {},
    create: {
      id: `seed-1-3-1-0`,
      name: 'billing_item_id', type: 'String',
      required: true, description: 'Unique identifier for the billing line item',
      sortOrder: 0, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-1` },
    update: {},
    create: {
      id: `seed-1-3-1-1`,
      name: 'billing_id', type: 'String',
      required: true, description: 'Parent billing document',
      sortOrder: 1, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-2` },
    update: {},
    create: {
      id: `seed-1-3-1-2`,
      name: 'delivery_item_id', type: 'String',
      required: false, description: 'Delivery item being billed',
      sortOrder: 2, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-3` },
    update: {},
    create: {
      id: `seed-1-3-1-3`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being billed',
      sortOrder: 3, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-4` },
    update: {},
    create: {
      id: `seed-1-3-1-4`,
      name: 'billed_quantity', type: 'Decimal',
      required: true, description: 'Quantity billed',
      sortOrder: 4, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-5` },
    update: {},
    create: {
      id: `seed-1-3-1-5`,
      name: 'unit_price', type: 'Decimal',
      required: false, description: 'Unit price on the invoice',
      sortOrder: 5, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-6` },
    update: {},
    create: {
      id: `seed-1-3-1-6`,
      name: 'tax_amount', type: 'Decimal',
      required: false, description: 'Tax amount on this line',
      sortOrder: 6, entityId: ent_1_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-1-7` },
    update: {},
    create: {
      id: `seed-1-3-1-7`,
      name: 'net_value', type: 'Decimal',
      required: false, description: 'Net billed value',
      sortOrder: 7, entityId: ent_1_3_1.id,
    },
  });
  const ent_1_3_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Delivery Header` } },
    update: {},
    create: {
      name: `Delivery Header`,
      description: `=VLOOKUP(D101, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"fulfils","target":"Sales Header","cardinality":"M:1","type":"Association","description":"A Delivery fulfils a Sales Order"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-0` },
    update: {},
    create: {
      id: `seed-1-3-2-0`,
      name: 'delivery_id', type: 'String',
      required: true, description: 'Unique identifier for the delivery',
      sortOrder: 0, entityId: ent_1_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-1` },
    update: {},
    create: {
      id: `seed-1-3-2-1`,
      name: 'delivery_date', type: 'Date',
      required: true, description: 'Actual or planned delivery date',
      sortOrder: 1, entityId: ent_1_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-2` },
    update: {},
    create: {
      id: `seed-1-3-2-2`,
      name: 'sales_order_id', type: 'String',
      required: false, description: 'Source sales order for the delivery',
      sortOrder: 2, entityId: ent_1_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-3` },
    update: {},
    create: {
      id: `seed-1-3-2-3`,
      name: 'ship_from_location_id', type: 'String',
      required: false, description: 'Ship-from location',
      sortOrder: 3, entityId: ent_1_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-4` },
    update: {},
    create: {
      id: `seed-1-3-2-4`,
      name: 'ship_to_location_id', type: 'String',
      required: false, description: 'Ship-to customer location',
      sortOrder: 4, entityId: ent_1_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-2-5` },
    update: {},
    create: {
      id: `seed-1-3-2-5`,
      name: 'transport_mode_id', type: 'String',
      required: false, description: 'Mode of transport used',
      sortOrder: 5, entityId: ent_1_3_2.id,
    },
  });
  const ent_1_3_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Delivery Item` } },
    update: {},
    create: {
      name: `Delivery Item`,
      description: `=VLOOKUP(D102, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"line of","target":"Delivery Header","cardinality":"M:1","type":"Association","description":"A Delivery Item is a line within a Delivery"},{"name":"from","target":"Sales Item","cardinality":"M:1","type":"Association","description":"A Delivery Item traces back to a Sales Item"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-3-0` },
    update: {},
    create: {
      id: `seed-1-3-3-0`,
      name: 'delivery_item_id', type: 'String',
      required: true, description: 'Unique identifier for the delivery line item',
      sortOrder: 0, entityId: ent_1_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-3-1` },
    update: {},
    create: {
      id: `seed-1-3-3-1`,
      name: 'delivery_id', type: 'String',
      required: true, description: 'Parent delivery',
      sortOrder: 1, entityId: ent_1_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-3-2` },
    update: {},
    create: {
      id: `seed-1-3-3-2`,
      name: 'sales_item_id', type: 'String',
      required: false, description: 'Sales order line being fulfilled',
      sortOrder: 2, entityId: ent_1_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-3-3` },
    update: {},
    create: {
      id: `seed-1-3-3-3`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being delivered',
      sortOrder: 3, entityId: ent_1_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-3-4` },
    update: {},
    create: {
      id: `seed-1-3-3-4`,
      name: 'delivery_quantity', type: 'Decimal',
      required: true, description: 'Quantity delivered',
      sortOrder: 4, entityId: ent_1_3_3.id,
    },
  });
  const ent_1_3_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Goods Movement` } },
    update: {},
    create: {
      name: `Goods Movement`,
      description: `=VLOOKUP(D103, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"typed by","target":"Movement Type","cardinality":"M:1","type":"Association","description":"A Goods Movement is classified by a Movement Type"},{"name":"moves","target":"Item","cardinality":"M:1","type":"Association","description":"A Goods Movement concerns a specific Item"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-0` },
    update: {},
    create: {
      id: `seed-1-3-4-0`,
      name: 'movement_id', type: 'String',
      required: true, description: 'Unique identifier for the goods movement',
      sortOrder: 0, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-1` },
    update: {},
    create: {
      id: `seed-1-3-4-1`,
      name: 'movement_type_id', type: 'String',
      required: true, description: 'Type of goods movement',
      sortOrder: 1, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-2` },
    update: {},
    create: {
      id: `seed-1-3-4-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being moved',
      sortOrder: 2, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-3` },
    update: {},
    create: {
      id: `seed-1-3-4-3`,
      name: 'from_location_id', type: 'String',
      required: false, description: 'Source location (null for receipts)',
      sortOrder: 3, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-4` },
    update: {},
    create: {
      id: `seed-1-3-4-4`,
      name: 'to_location_id', type: 'String',
      required: false, description: 'Destination location (null for issues)',
      sortOrder: 4, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-5` },
    update: {},
    create: {
      id: `seed-1-3-4-5`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Quantity moved',
      sortOrder: 5, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-6` },
    update: {},
    create: {
      id: `seed-1-3-4-6`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure',
      sortOrder: 6, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-7` },
    update: {},
    create: {
      id: `seed-1-3-4-7`,
      name: 'movement_date', type: 'Date',
      required: true, description: 'Date and time of the movement',
      sortOrder: 7, entityId: ent_1_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-4-8` },
    update: {},
    create: {
      id: `seed-1-3-4-8`,
      name: 'reference_id', type: 'String',
      required: false, description: 'Reference to source document (PO, SO, Transfer Order)',
      sortOrder: 8, entityId: ent_1_3_4.id,
    },
  });
  const ent_1_3_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Movement Type` } },
    update: {},
    create: {
      name: `Movement Type`,
      description: `=VLOOKUP(D104, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-5-0` },
    update: {},
    create: {
      id: `seed-1-3-5-0`,
      name: 'movement_type_id', type: 'String',
      required: true, description: 'Unique identifier for the movement type',
      sortOrder: 0, entityId: ent_1_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-5-1` },
    update: {},
    create: {
      id: `seed-1-3-5-1`,
      name: 'movement_code', type: 'String',
      required: true, description: 'Short code for the movement type (e.g. 101, 601)',
      sortOrder: 1, entityId: ent_1_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-5-2` },
    update: {},
    create: {
      id: `seed-1-3-5-2`,
      name: 'movement_name', type: 'String',
      required: true, description: 'Name of the movement type',
      sortOrder: 2, entityId: ent_1_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-5-3` },
    update: {},
    create: {
      id: `seed-1-3-5-3`,
      name: 'direction', type: 'Enum(In|Out|Transfer|Adjustment)',
      required: true, description: 'Direction of inventory change',
      sortOrder: 3, entityId: ent_1_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-5-4` },
    update: {},
    create: {
      id: `seed-1-3-5-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of when this movement type is used',
      sortOrder: 4, entityId: ent_1_3_5.id,
    },
  });
  const ent_1_3_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Purchase Flow` } },
    update: {},
    create: {
      name: `Purchase Flow`,
      description: `=VLOOKUP(D105, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-6-0` },
    update: {},
    create: {
      id: `seed-1-3-6-0`,
      name: 'flow_id', type: 'String',
      required: true, description: 'Unique identifier for the purchase flow event',
      sortOrder: 0, entityId: ent_1_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-6-1` },
    update: {},
    create: {
      id: `seed-1-3-6-1`,
      name: 'purchase_order_id', type: 'String',
      required: true, description: 'Purchase order undergoing the transition',
      sortOrder: 1, entityId: ent_1_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-6-2` },
    update: {},
    create: {
      id: `seed-1-3-6-2`,
      name: 'from_status', type: 'String',
      required: true, description: 'Status before the transition',
      sortOrder: 2, entityId: ent_1_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-6-3` },
    update: {},
    create: {
      id: `seed-1-3-6-3`,
      name: 'to_status', type: 'String',
      required: true, description: 'Status after the transition',
      sortOrder: 3, entityId: ent_1_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-6-4` },
    update: {},
    create: {
      id: `seed-1-3-6-4`,
      name: 'transition_date', type: 'Date',
      required: true, description: 'Date and time of the status transition',
      sortOrder: 4, entityId: ent_1_3_6.id,
    },
  });
  const ent_1_3_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Purchase Header` } },
    update: {},
    create: {
      name: `Purchase Header`,
      description: `=VLOOKUP(D106, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"issued to","target":"Supplier","cardinality":"M:1","type":"Association","description":"A Purchase Order is issued to a Supplier"},{"name":"for site","target":"Site","cardinality":"M:1","type":"Association","description":"A Purchase Order is for a receiving Site"},{"name":"has lines","target":"Purchase Item","cardinality":"1:M","type":"Composition","description":"A Purchase Order Header contains one or more Purchase Items"}],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-0` },
    update: {},
    create: {
      id: `seed-1-3-7-0`,
      name: 'purchase_order_id', type: 'String',
      required: true, description: 'Unique identifier for the purchase order',
      sortOrder: 0, entityId: ent_1_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-1` },
    update: {},
    create: {
      id: `seed-1-3-7-1`,
      name: 'order_date', type: 'Date',
      required: true, description: 'Date the purchase order was created',
      sortOrder: 1, entityId: ent_1_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-2` },
    update: {},
    create: {
      id: `seed-1-3-7-2`,
      name: 'supplier_id', type: 'String',
      required: true, description: 'Supplier to whom the order is issued',
      sortOrder: 2, entityId: ent_1_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-3` },
    update: {},
    create: {
      id: `seed-1-3-7-3`,
      name: 'site_id', type: 'String',
      required: true, description: 'Receiving site for the purchase order',
      sortOrder: 3, entityId: ent_1_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-4` },
    update: {},
    create: {
      id: `seed-1-3-7-4`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Order currency',
      sortOrder: 4, entityId: ent_1_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-7-5` },
    update: {},
    create: {
      id: `seed-1-3-7-5`,
      name: 'status', type: 'String',
      required: false, description: 'Current purchase order status',
      sortOrder: 5, entityId: ent_1_3_7.id,
    },
  });
  const ent_1_3_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Purchase Item` } },
    update: {},
    create: {
      name: `Purchase Item`,
      description: `=VLOOKUP(D107, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"part of","target":"Purchase Header","cardinality":"M:1","type":"Association","description":"A Purchase Item is a line within a Purchase Order"},{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Purchase Item refers to an Item"}],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-0` },
    update: {},
    create: {
      id: `seed-1-3-8-0`,
      name: 'purchase_item_id', type: 'String',
      required: true, description: 'Unique identifier for the purchase order line',
      sortOrder: 0, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-1` },
    update: {},
    create: {
      id: `seed-1-3-8-1`,
      name: 'purchase_order_id', type: 'String',
      required: true, description: 'Parent purchase order',
      sortOrder: 1, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-2` },
    update: {},
    create: {
      id: `seed-1-3-8-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being purchased',
      sortOrder: 2, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-3` },
    update: {},
    create: {
      id: `seed-1-3-8-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Ordered quantity',
      sortOrder: 3, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-4` },
    update: {},
    create: {
      id: `seed-1-3-8-4`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure',
      sortOrder: 4, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-5` },
    update: {},
    create: {
      id: `seed-1-3-8-5`,
      name: 'unit_cost', type: 'Decimal',
      required: false, description: 'Agreed unit cost',
      sortOrder: 5, entityId: ent_1_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-8-6` },
    update: {},
    create: {
      id: `seed-1-3-8-6`,
      name: 'delivery_date', type: 'Date',
      required: false, description: 'Expected delivery date from supplier',
      sortOrder: 6, entityId: ent_1_3_8.id,
    },
  });
  const ent_1_3_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Sales Flow` } },
    update: {},
    create: {
      name: `Sales Flow`,
      description: `=VLOOKUP(D108, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-0` },
    update: {},
    create: {
      id: `seed-1-3-9-0`,
      name: 'flow_id', type: 'String',
      required: true, description: 'Unique identifier for the flow event',
      sortOrder: 0, entityId: ent_1_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-1` },
    update: {},
    create: {
      id: `seed-1-3-9-1`,
      name: 'sales_order_id', type: 'String',
      required: true, description: 'Sales order undergoing the transition',
      sortOrder: 1, entityId: ent_1_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-2` },
    update: {},
    create: {
      id: `seed-1-3-9-2`,
      name: 'from_status', type: 'String',
      required: true, description: 'Status before the transition',
      sortOrder: 2, entityId: ent_1_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-3` },
    update: {},
    create: {
      id: `seed-1-3-9-3`,
      name: 'to_status', type: 'String',
      required: true, description: 'Status after the transition',
      sortOrder: 3, entityId: ent_1_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-4` },
    update: {},
    create: {
      id: `seed-1-3-9-4`,
      name: 'transition_date', type: 'Date',
      required: true, description: 'Date and time of the status transition',
      sortOrder: 4, entityId: ent_1_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-9-5` },
    update: {},
    create: {
      id: `seed-1-3-9-5`,
      name: 'triggered_by', type: 'String',
      required: false, description: 'User or system that triggered the transition',
      sortOrder: 5, entityId: ent_1_3_9.id,
    },
  });
  const ent_1_3_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Sales Header` } },
    update: {},
    create: {
      name: `Sales Header`,
      description: `=VLOOKUP(D109, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"placed by","target":"Enterprise Customer","cardinality":"M:1","type":"Association","description":"A Sales Order is placed by a Customer"},{"name":"processed by","target":"Sales Organization","cardinality":"M:1","type":"Association","description":"A Sales Order is processed by a Sales Organisation"},{"name":"via channel","target":"Channel","cardinality":"M:1","type":"Association","description":"A Sales Order comes through a Channel"},{"name":"has lines","target":"Sales Item","cardinality":"1:M","type":"Composition","description":"A Sales Order Header contains one or more Sales Items"}],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-0` },
    update: {},
    create: {
      id: `seed-1-3-10-0`,
      name: 'sales_order_id', type: 'String',
      required: true, description: 'Unique identifier for the sales order',
      sortOrder: 0, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-1` },
    update: {},
    create: {
      id: `seed-1-3-10-1`,
      name: 'order_date', type: 'Date',
      required: true, description: 'Date the order was received',
      sortOrder: 1, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-2` },
    update: {},
    create: {
      id: `seed-1-3-10-2`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Sold-to customer for the order',
      sortOrder: 2, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-3` },
    update: {},
    create: {
      id: `seed-1-3-10-3`,
      name: 'sales_org_id', type: 'String',
      required: true, description: 'Sales organisation processing the order',
      sortOrder: 3, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-4` },
    update: {},
    create: {
      id: `seed-1-3-10-4`,
      name: 'channel_id', type: 'String',
      required: false, description: 'Channel through which the order was placed',
      sortOrder: 4, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-5` },
    update: {},
    create: {
      id: `seed-1-3-10-5`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Order currency',
      sortOrder: 5, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-6` },
    update: {},
    create: {
      id: `seed-1-3-10-6`,
      name: 'order_type', type: 'Enum(Standard|Returns|Credit|Debit|Intercompany)',
      required: true, description: 'Type of sales order',
      sortOrder: 6, entityId: ent_1_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-10-7` },
    update: {},
    create: {
      id: `seed-1-3-10-7`,
      name: 'status', type: 'String',
      required: false, description: 'Current order status',
      sortOrder: 7, entityId: ent_1_3_10.id,
    },
  });
  const ent_1_3_11 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Sales Item` } },
    update: {},
    create: {
      name: `Sales Item`,
      description: `=VLOOKUP(D110, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"belongs to","target":"Sales Header","cardinality":"M:1","type":"Association","description":"A Sales Item is a line within a Sales Order"},{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"A Sales Item refers to an Item"}],
      sortOrder: 11,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-0` },
    update: {},
    create: {
      id: `seed-1-3-11-0`,
      name: 'sales_item_id', type: 'String',
      required: true, description: 'Unique identifier for the sales order line item',
      sortOrder: 0, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-1` },
    update: {},
    create: {
      id: `seed-1-3-11-1`,
      name: 'sales_order_id', type: 'String',
      required: true, description: 'Parent sales order',
      sortOrder: 1, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-2` },
    update: {},
    create: {
      id: `seed-1-3-11-2`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item being ordered',
      sortOrder: 2, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-3` },
    update: {},
    create: {
      id: `seed-1-3-11-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Ordered quantity',
      sortOrder: 3, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-4` },
    update: {},
    create: {
      id: `seed-1-3-11-4`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure for the quantity',
      sortOrder: 4, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-5` },
    update: {},
    create: {
      id: `seed-1-3-11-5`,
      name: 'unit_price', type: 'Decimal',
      required: false, description: 'Agreed unit price',
      sortOrder: 5, entityId: ent_1_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-11-6` },
    update: {},
    create: {
      id: `seed-1-3-11-6`,
      name: 'net_value', type: 'Decimal',
      required: false, description: 'Net line value after discounts',
      sortOrder: 6, entityId: ent_1_3_11.id,
    },
  });
  const ent_1_3_12 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Sales Schedule Line` } },
    update: {},
    create: {
      name: `Sales Schedule Line`,
      description: `=VLOOKUP(D111, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [{"name":"detail of","target":"Sales Item","cardinality":"M:1","type":"Association","description":"A Schedule Line is a delivery detail of a Sales Item"}],
      sortOrder: 12,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-12-0` },
    update: {},
    create: {
      id: `seed-1-3-12-0`,
      name: 'schedule_line_id', type: 'String',
      required: true, description: 'Unique identifier for the schedule line',
      sortOrder: 0, entityId: ent_1_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-12-1` },
    update: {},
    create: {
      id: `seed-1-3-12-1`,
      name: 'sales_item_id', type: 'String',
      required: true, description: 'Parent sales order item',
      sortOrder: 1, entityId: ent_1_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-12-2` },
    update: {},
    create: {
      id: `seed-1-3-12-2`,
      name: 'delivery_date', type: 'Date',
      required: true, description: 'Requested or confirmed delivery date',
      sortOrder: 2, entityId: ent_1_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-12-3` },
    update: {},
    create: {
      id: `seed-1-3-12-3`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Requested quantity for this delivery',
      sortOrder: 3, entityId: ent_1_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-12-4` },
    update: {},
    create: {
      id: `seed-1-3-12-4`,
      name: 'confirmed_quantity', type: 'Decimal',
      required: false, description: 'Quantity confirmed by supply planning',
      sortOrder: 4, entityId: ent_1_3_12.id,
    },
  });
  const ent_1_3_13 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_3.id, name: `Sales Status` } },
    update: {},
    create: {
      name: `Sales Status`,
      description: `=VLOOKUP(D112, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_3.id,
      relationships: [],
      sortOrder: 13,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-13-0` },
    update: {},
    create: {
      id: `seed-1-3-13-0`,
      name: 'status_id', type: 'String',
      required: true, description: 'Unique identifier for the status snapshot',
      sortOrder: 0, entityId: ent_1_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-13-1` },
    update: {},
    create: {
      id: `seed-1-3-13-1`,
      name: 'sales_order_id', type: 'String',
      required: true, description: 'Sales order this status applies to',
      sortOrder: 1, entityId: ent_1_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-13-2` },
    update: {},
    create: {
      id: `seed-1-3-13-2`,
      name: 'status_type', type: 'Enum(OrderStatus|DeliveryStatus|BillingStatus)',
      required: true, description: 'Dimension of status being captured',
      sortOrder: 2, entityId: ent_1_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-13-3` },
    update: {},
    create: {
      id: `seed-1-3-13-3`,
      name: 'current_status', type: 'String',
      required: true, description: 'Current status value',
      sortOrder: 3, entityId: ent_1_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-3-13-4` },
    update: {},
    create: {
      id: `seed-1-3-13-4`,
      name: 'updated_date', type: 'Date',
      required: true, description: 'Date this status was last updated',
      sortOrder: 4, entityId: ent_1_3_13.id,
    },
  });
  const sub_1_4 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_1.id, name: 'General' } },
    update: {},
    create: { name: 'General', modelId: model_1.id, sortOrder: 4 },
  });
  const ent_1_4_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Aggregate Sales` } },
    update: {},
    create: {
      name: `Aggregate Sales`,
      description: `=VLOOKUP(D113, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"extends","target":"Demand","cardinality":"1:1","type":"Inheritance","description":"Aggregate Sales is a specialisation of Demand"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-0-0` },
    update: {},
    create: {
      id: `seed-1-4-0-0`,
      name: 'demand_id', type: 'String',
      required: true, description: 'FK to parent Demand record',
      sortOrder: 0, entityId: ent_1_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-0-1` },
    update: {},
    create: {
      id: `seed-1-4-0-1`,
      name: 'aggregation_level', type: 'String',
      required: false, description: 'Level of aggregation (e.g. Account, Channel)',
      sortOrder: 1, entityId: ent_1_4_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-0-2` },
    update: {},
    create: {
      id: `seed-1-4-0-2`,
      name: 'aggregation_period', type: 'String',
      required: false, description: 'Time period of aggregation (e.g. Weekly, Monthly)',
      sortOrder: 2, entityId: ent_1_4_0.id,
    },
  });
  const ent_1_4_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Channel Inventory` } },
    update: {},
    create: {
      name: `Channel Inventory`,
      description: `=VLOOKUP(D114, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"Channel Inventory is for an Item"},{"name":"in channel","target":"Channel","cardinality":"M:1","type":"Association","description":"Channel Inventory is held in a Channel"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-0` },
    update: {},
    create: {
      id: `seed-1-4-1-0`,
      name: 'channel_inventory_id', type: 'String',
      required: true, description: 'Unique identifier for the channel inventory record',
      sortOrder: 0, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-1` },
    update: {},
    create: {
      id: `seed-1-4-1-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item in the channel',
      sortOrder: 1, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-2` },
    update: {},
    create: {
      id: `seed-1-4-1-2`,
      name: 'channel_id', type: 'String',
      required: true, description: 'Channel holding the inventory',
      sortOrder: 2, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-3` },
    update: {},
    create: {
      id: `seed-1-4-1-3`,
      name: 'location_id', type: 'String',
      required: false, description: 'Channel location where stock is held',
      sortOrder: 3, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-4` },
    update: {},
    create: {
      id: `seed-1-4-1-4`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Quantity on hand at the channel',
      sortOrder: 4, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-5` },
    update: {},
    create: {
      id: `seed-1-4-1-5`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure',
      sortOrder: 5, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-6` },
    update: {},
    create: {
      id: `seed-1-4-1-6`,
      name: 'as_of_date', type: 'Date',
      required: true, description: 'Date of the inventory snapshot',
      sortOrder: 6, entityId: ent_1_4_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-1-7` },
    update: {},
    create: {
      id: `seed-1-4-1-7`,
      name: 'customer_id', type: 'String',
      required: true, description: 'Customer reporting inventory',
      sortOrder: 7, entityId: ent_1_4_1.id,
    },
  });
  const ent_1_4_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Channel Sell-out` } },
    update: {},
    create: {
      name: `Channel Sell-out`,
      description: `=VLOOKUP(D115, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"for item","target":"Item","cardinality":"M:1","type":"Association","description":"Channel Sell-out is reported for an Item"},{"name":"via channel","target":"Channel","cardinality":"M:1","type":"Association","description":"Channel Sell-out is reported through a Channel"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-0` },
    update: {},
    create: {
      id: `seed-1-4-2-0`,
      name: 'sell_out_id', type: 'String',
      required: true, description: 'Unique identifier for the sell-out record',
      sortOrder: 0, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-1` },
    update: {},
    create: {
      id: `seed-1-4-2-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item sold out of the channel',
      sortOrder: 1, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-2` },
    update: {},
    create: {
      id: `seed-1-4-2-2`,
      name: 'channel_id', type: 'String',
      required: true, description: 'Channel reporting the sell-out',
      sortOrder: 2, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-3` },
    update: {},
    create: {
      id: `seed-1-4-2-3`,
      name: 'location_id', type: 'String',
      required: false, description: 'Specific channel location',
      sortOrder: 3, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-4` },
    update: {},
    create: {
      id: `seed-1-4-2-4`,
      name: 'period', type: 'Date',
      required: true, description: 'Period of the sell-out',
      sortOrder: 4, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-5` },
    update: {},
    create: {
      id: `seed-1-4-2-5`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Sell-out quantity',
      sortOrder: 5, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-6` },
    update: {},
    create: {
      id: `seed-1-4-2-6`,
      name: 'value', type: 'Decimal',
      required: false, description: 'Sell-out value at retail price',
      sortOrder: 6, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-7` },
    update: {},
    create: {
      id: `seed-1-4-2-7`,
      name: 'currency_id', type: 'String',
      required: false, description: 'Currency of the value',
      sortOrder: 7, entityId: ent_1_4_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-2-8` },
    update: {},
    create: {
      id: `seed-1-4-2-8`,
      name: 'customer _id', type: 'String',
      required: true, description: 'Customer reporting sell-out',
      sortOrder: 8, entityId: ent_1_4_2.id,
    },
  });
  const ent_1_4_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Event` } },
    update: {},
    create: {
      name: `Event`,
      description: `=VLOOKUP(D116, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"impacts item","target":"Item","cardinality":"M:1","type":"Association","description":"An Event can impact a specific Item"},{"name":"impacts location","target":"Location","cardinality":"M:1","type":"Association","description":"An Event can impact a specific Location"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-0` },
    update: {},
    create: {
      id: `seed-1-4-3-0`,
      name: 'event_id', type: 'String',
      required: true, description: 'Unique identifier for the event',
      sortOrder: 0, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-1` },
    update: {},
    create: {
      id: `seed-1-4-3-1`,
      name: 'event_name', type: 'String',
      required: true, description: 'Name or title of the event',
      sortOrder: 1, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-2` },
    update: {},
    create: {
      id: `seed-1-4-3-2`,
      name: 'event_type', type: 'String',
      required: true, description: 'Type of event (Promotion, Holiday, NPI, Disruption, Weather)',
      sortOrder: 2, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-3` },
    update: {},
    create: {
      id: `seed-1-4-3-3`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Start date of the event',
      sortOrder: 3, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-4` },
    update: {},
    create: {
      id: `seed-1-4-3-4`,
      name: 'end_date', type: 'Date',
      required: false, description: 'End date of the event',
      sortOrder: 4, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-5` },
    update: {},
    create: {
      id: `seed-1-4-3-5`,
      name: 'item_id', type: 'String',
      required: false, description: 'Item affected by the event (null = all items)',
      sortOrder: 5, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-6` },
    update: {},
    create: {
      id: `seed-1-4-3-6`,
      name: 'location_id', type: 'String',
      required: false, description: 'Location affected by the event (null = all locations)',
      sortOrder: 6, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-7` },
    update: {},
    create: {
      id: `seed-1-4-3-7`,
      name: 'impact_factor', type: 'Decimal',
      required: false, description: 'Multiplicative impact factor on demand (e.g. 1.2 = +20%)',
      sortOrder: 7, entityId: ent_1_4_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-3-8` },
    update: {},
    create: {
      id: `seed-1-4-3-8`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the event and its expected impact',
      sortOrder: 8, entityId: ent_1_4_3.id,
    },
  });
  const ent_1_4_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Industry Template` } },
    update: {},
    create: {
      name: `Industry Template`,
      description: `=VLOOKUP(D117, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"for industry","target":"Industry Category","cardinality":"M:1","type":"Association","description":"An Industry Template targets a specific Industry"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-4-0` },
    update: {},
    create: {
      id: `seed-1-4-4-0`,
      name: 'template_id', type: 'String',
      required: true, description: 'Unique identifier for the industry template',
      sortOrder: 0, entityId: ent_1_4_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-4-1` },
    update: {},
    create: {
      id: `seed-1-4-4-1`,
      name: 'template_name', type: 'String',
      required: true, description: 'Name of the template',
      sortOrder: 1, entityId: ent_1_4_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-4-2` },
    update: {},
    create: {
      id: `seed-1-4-4-2`,
      name: 'industry_id', type: 'String',
      required: true, description: 'Industry this template is designed for',
      sortOrder: 2, entityId: ent_1_4_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-4-3` },
    update: {},
    create: {
      id: `seed-1-4-4-3`,
      name: 'version', type: 'String',
      required: false, description: 'Version of the template',
      sortOrder: 3, entityId: ent_1_4_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-4-4` },
    update: {},
    create: {
      id: `seed-1-4-4-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the template\'s scope and recommended use',
      sortOrder: 4, entityId: ent_1_4_4.id,
    },
  });
  const ent_1_4_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Inventory On Hand` } },
    update: {},
    create: {
      name: `Inventory On Hand`,
      description: `=VLOOKUP(D118, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-0` },
    update: {},
    create: {
      id: `seed-1-4-5-0`,
      name: 'inventory_id', type: 'String',
      required: true, description: 'Unique identifier for the inventory record',
      sortOrder: 0, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-1` },
    update: {},
    create: {
      id: `seed-1-4-5-1`,
      name: 'item_id', type: 'String',
      required: true, description: 'Item in stock',
      sortOrder: 1, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-2` },
    update: {},
    create: {
      id: `seed-1-4-5-2`,
      name: 'location_id', type: 'String',
      required: true, description: 'Location where stock is held',
      sortOrder: 2, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-3` },
    update: {},
    create: {
      id: `seed-1-4-5-3`,
      name: 'storage_location_id', type: 'String',
      required: false, description: 'Storage location within the site',
      sortOrder: 3, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-4` },
    update: {},
    create: {
      id: `seed-1-4-5-4`,
      name: 'quantity', type: 'Decimal',
      required: true, description: 'Quantity on hand',
      sortOrder: 4, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-5` },
    update: {},
    create: {
      id: `seed-1-4-5-5`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unit of measure',
      sortOrder: 5, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-6` },
    update: {},
    create: {
      id: `seed-1-4-5-6`,
      name: 'inventory_type', type: 'Enum(Unrestricted|QualityInspection|Blocked|Consignment)',
      required: true, description: 'Type/status of the inventory',
      sortOrder: 6, entityId: ent_1_4_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-5-7` },
    update: {},
    create: {
      id: `seed-1-4-5-7`,
      name: 'as_of_date', type: 'Date',
      required: true, description: 'Date for which this inventory snapshot is valid',
      sortOrder: 7, entityId: ent_1_4_5.id,
    },
  });
  const ent_1_4_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Inventory Policy` } },
    update: {},
    create: {
      name: `Inventory Policy`,
      description: `=VLOOKUP(D119, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-0` },
    update: {},
    create: {
      id: `seed-1-4-6-0`,
      name: 'policy_id', type: 'String',
      required: true, description: 'Unique identifier for the inventory policy',
      sortOrder: 0, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-1` },
    update: {},
    create: {
      id: `seed-1-4-6-1`,
      name: 'material_node_id', type: 'String',
      required: true, description: 'Material node to which this policy applies',
      sortOrder: 1, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-2` },
    update: {},
    create: {
      id: `seed-1-4-6-2`,
      name: 'policy_type', type: 'Enum(MinMax|ReorderPoint|SafetyStock|MRP|Kanban)',
      required: true, description: 'Type of replenishment policy',
      sortOrder: 2, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-3` },
    update: {},
    create: {
      id: `seed-1-4-6-3`,
      name: 'safety_stock', type: 'Decimal',
      required: false, description: 'Safety stock quantity',
      sortOrder: 3, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-4` },
    update: {},
    create: {
      id: `seed-1-4-6-4`,
      name: 'reorder_point', type: 'Decimal',
      required: false, description: 'Inventory level that triggers replenishment',
      sortOrder: 4, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-5` },
    update: {},
    create: {
      id: `seed-1-4-6-5`,
      name: 'min_order_qty', type: 'Decimal',
      required: false, description: 'Minimum order quantity constraint',
      sortOrder: 5, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-6` },
    update: {},
    create: {
      id: `seed-1-4-6-6`,
      name: 'max_order_qty', type: 'Decimal',
      required: false, description: 'Maximum order quantity constraint',
      sortOrder: 6, entityId: ent_1_4_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-6-7` },
    update: {},
    create: {
      id: `seed-1-4-6-7`,
      name: 'lead_time', type: 'Decimal',
      required: false, description: 'Replenishment lead time used in policy',
      sortOrder: 7, entityId: ent_1_4_6.id,
    },
  });
  const ent_1_4_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Policy Assignment` } },
    update: {},
    create: {
      name: `Policy Assignment`,
      description: `=VLOOKUP(D120, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"assigns","target":"Policy Option","cardinality":"M:1","type":"Association","description":"Policy Assignment links a Policy Option to an entity"}],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-0` },
    update: {},
    create: {
      id: `seed-1-4-7-0`,
      name: 'assignment_id', type: 'String',
      required: true, description: 'Unique identifier for the policy assignment',
      sortOrder: 0, entityId: ent_1_4_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-1` },
    update: {},
    create: {
      id: `seed-1-4-7-1`,
      name: 'policy_option_id', type: 'String',
      required: true, description: 'Policy option being assigned',
      sortOrder: 1, entityId: ent_1_4_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-2` },
    update: {},
    create: {
      id: `seed-1-4-7-2`,
      name: 'entity_type', type: 'String',
      required: true, description: 'Type of entity receiving the policy (Item, Location, MaterialNode)',
      sortOrder: 2, entityId: ent_1_4_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-3` },
    update: {},
    create: {
      id: `seed-1-4-7-3`,
      name: 'entity_id', type: 'String',
      required: true, description: 'ID of the entity receiving the policy',
      sortOrder: 3, entityId: ent_1_4_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-4` },
    update: {},
    create: {
      id: `seed-1-4-7-4`,
      name: 'valid_from', type: 'Date',
      required: false, description: 'Start of assignment validity',
      sortOrder: 4, entityId: ent_1_4_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-7-5` },
    update: {},
    create: {
      id: `seed-1-4-7-5`,
      name: 'valid_to', type: 'Date',
      required: false, description: 'End of assignment validity',
      sortOrder: 5, entityId: ent_1_4_7.id,
    },
  });
  const ent_1_4_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Policy Option` } },
    update: {},
    create: {
      name: `Policy Option`,
      description: `=VLOOKUP(D121, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_1_4.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-0` },
    update: {},
    create: {
      id: `seed-1-4-8-0`,
      name: 'policy_option_id', type: 'String',
      required: true, description: 'Unique identifier for the policy option',
      sortOrder: 0, entityId: ent_1_4_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-1` },
    update: {},
    create: {
      id: `seed-1-4-8-1`,
      name: 'policy_name', type: 'String',
      required: true, description: 'Name of the policy',
      sortOrder: 1, entityId: ent_1_4_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-2` },
    update: {},
    create: {
      id: `seed-1-4-8-2`,
      name: 'policy_type', type: 'String',
      required: true, description: 'Category of policy (e.g. Replenishment, Demand Sensing)',
      sortOrder: 2, entityId: ent_1_4_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-3` },
    update: {},
    create: {
      id: `seed-1-4-8-3`,
      name: 'parameter_name', type: 'String',
      required: true, description: 'Name of the policy parameter',
      sortOrder: 3, entityId: ent_1_4_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-4` },
    update: {},
    create: {
      id: `seed-1-4-8-4`,
      name: 'parameter_value', type: 'String',
      required: true, description: 'Value of the policy parameter',
      sortOrder: 4, entityId: ent_1_4_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-8-5` },
    update: {},
    create: {
      id: `seed-1-4-8-5`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the policy option',
      sortOrder: 5, entityId: ent_1_4_8.id,
    },
  });
  const ent_1_4_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_1_4.id, name: `Decision Model` } },
    update: {},
    create: {
      name: `Decision Model`,
      description: `Defines a named planning decision model — the combination of algorithms, policies, and configuration that governs how a planning run is executed. Referenced by Plan as the computational engine behind a planning cycle.`,
      subModelId: sub_1_4.id,
      relationships: [{"name":"uses template","target":"Industry Template","cardinality":"M:1","type":"Association","description":"A Decision Model may be based on an Industry Template"}],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-9-0` },
    update: {},
    create: {
      id: `seed-1-4-9-0`,
      name: 'decision_model_id', type: 'UUID',
      required: true, description: 'Unique identifier for the decision model',
      sortOrder: 0, entityId: ent_1_4_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-9-1` },
    update: {},
    create: {
      id: `seed-1-4-9-1`,
      name: 'decision_model_name', type: 'String',
      required: true, description: 'Name of the decision model',
      sortOrder: 1, entityId: ent_1_4_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-9-2` },
    update: {},
    create: {
      id: `seed-1-4-9-2`,
      name: 'model_version', type: 'String',
      required: false, description: 'Version of the decision model',
      sortOrder: 2, entityId: ent_1_4_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-9-3` },
    update: {},
    create: {
      id: `seed-1-4-9-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the decision model and its planning logic',
      sortOrder: 3, entityId: ent_1_4_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-1-4-9-4` },
    update: {},
    create: {
      id: `seed-1-4-9-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this decision model is active',
      sortOrder: 4, entityId: ent_1_4_9.id,
    },
  });
  const model_2 = await prisma.ontologyModel.upsert({
    where: { name: 'Global Market Model' },
    update: {},
    create: { name: 'Global Market Model', color: '#10B981', sortOrder: 2 },
  });
  const sub_2_0 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_2.id, name: 'Consumer Segmentation' } },
    update: {},
    create: { name: 'Consumer Segmentation', modelId: model_2.id, sortOrder: 0 },
  });
  const ent_2_0_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Behavior Pattern` } },
    update: {},
    create: {
      name: `Consumer Behavior Pattern`,
      description: `=VLOOKUP(D123, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-0` },
    update: {},
    create: {
      id: `seed-2-0-0-0`,
      name: 'behavior_id', type: 'String',
      required: true, description: 'Globally unique identifier for the behavior pattern',
      sortOrder: 0, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-1` },
    update: {},
    create: {
      id: `seed-2-0-0-1`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'FK to the Consumer Segment exhibiting this behavior',
      sortOrder: 1, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-2` },
    update: {},
    create: {
      id: `seed-2-0-0-2`,
      name: 'behavior_code', type: 'String',
      required: true, description: 'Short code for the behavior pattern',
      sortOrder: 2, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-3` },
    update: {},
    create: {
      id: `seed-2-0-0-3`,
      name: 'behavior_name', type: 'String',
      required: true, description: 'Human-readable name (e.g. Organic Product Purchasing, Promotion Reliance)',
      sortOrder: 3, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-4` },
    update: {},
    create: {
      id: `seed-2-0-0-4`,
      name: 'behavior_category', type: 'Enum(Purchase|Consumption|Media|Channel|Loyalty|Advocacy)',
      required: true, description: 'Broad category of the behavior',
      sortOrder: 4, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-5` },
    update: {},
    create: {
      id: `seed-2-0-0-5`,
      name: 'metric_name', type: 'String',
      required: true, description: 'What is being measured (e.g. organic_share_of_basket, pct_volume_on_promotion)',
      sortOrder: 5, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-6` },
    update: {},
    create: {
      id: `seed-2-0-0-6`,
      name: 'metric_value', type: 'Decimal',
      required: true, description: 'The measured value',
      sortOrder: 6, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-7` },
    update: {},
    create: {
      id: `seed-2-0-0-7`,
      name: 'metric_unit', type: 'String',
      required: false, description: 'Unit of measure (e.g. percent, transactions/month)',
      sortOrder: 7, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-8` },
    update: {},
    create: {
      id: `seed-2-0-0-8`,
      name: 'index_vs_average', type: 'Decimal',
      required: false, description: 'Index where 100 = population average (e.g. 145 means 45% above average)',
      sortOrder: 8, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-9` },
    update: {},
    create: {
      id: `seed-2-0-0-9`,
      name: 'measurement_period', type: 'String',
      required: false, description: 'Time window for measurement (e.g. monthly, annual, rolling_52w)',
      sortOrder: 9, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-10` },
    update: {},
    create: {
      id: `seed-2-0-0-10`,
      name: 'market_product_category_id', type: 'String',
      required: false, description: 'FK to Market Product Category where behavior is observed',
      sortOrder: 10, entityId: ent_2_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-0-11` },
    update: {},
    create: {
      id: `seed-2-0-0-11`,
      name: 'data_source', type: 'String',
      required: false, description: 'Source of the measurement (e.g. Nielsen Homescan Panel, IRI Panel Data)',
      sortOrder: 11, entityId: ent_2_0_0.id,
    },
  });
  const ent_2_0_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Lifestage` } },
    update: {},
    create: {
      name: `Consumer Lifestage`,
      description: `=VLOOKUP(D124, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [{"name":"triggers need","target":"Consumer Need","cardinality":"1:M","type":"Association","description":"Entering a lifestage makes certain Consumer Needs salient"},{"name":"follows","target":"Consumer Lifestage","cardinality":"M:1","type":"Association","description":"Lifestages have a typical temporal sequence"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-0` },
    update: {},
    create: {
      id: `seed-2-0-1-0`,
      name: 'lifestage_id', type: 'String',
      required: true, description: 'Globally unique identifier for the lifestage',
      sortOrder: 0, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-1` },
    update: {},
    create: {
      id: `seed-2-0-1-1`,
      name: 'lifestage_code', type: 'String',
      required: true, description: 'Short code (e.g. LS_YOUNG_FAM, LS_EMPTY_NEST)',
      sortOrder: 1, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-2` },
    update: {},
    create: {
      id: `seed-2-0-1-2`,
      name: 'lifestage_name', type: 'String',
      required: true, description: 'Human-readable name (e.g. Young Family, Empty Nester)',
      sortOrder: 2, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-3` },
    update: {},
    create: {
      id: `seed-2-0-1-3`,
      name: 'typical_age_min', type: 'Integer',
      required: false, description: 'Lower bound of typical age range',
      sortOrder: 3, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-4` },
    update: {},
    create: {
      id: `seed-2-0-1-4`,
      name: 'typical_age_max', type: 'Integer',
      required: false, description: 'Upper bound of typical age range',
      sortOrder: 4, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-5` },
    update: {},
    create: {
      id: `seed-2-0-1-5`,
      name: 'household_composition', type: 'String',
      required: false, description: 'Typical household structure (e.g. Couple with children under 6)',
      sortOrder: 5, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-6` },
    update: {},
    create: {
      id: `seed-2-0-1-6`,
      name: 'economic_phase', type: 'Enum(Dependent|EarlyEarning|PeakEarning|Accumulating|Decumulating)',
      required: false, description: 'Economic life phase',
      sortOrder: 6, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-7` },
    update: {},
    create: {
      id: `seed-2-0-1-7`,
      name: 'description', type: 'String',
      required: true, description: 'Narrative description of the lifestage',
      sortOrder: 7, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-8` },
    update: {},
    create: {
      id: `seed-2-0-1-8`,
      name: 'preceding_lifestage_id', type: 'String',
      required: false, description: 'FK to typical prior lifestage',
      sortOrder: 8, entityId: ent_2_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-1-9` },
    update: {},
    create: {
      id: `seed-2-0-1-9`,
      name: 'following_lifestage_id', type: 'String',
      required: false, description: 'FK to typical next lifestage',
      sortOrder: 9, entityId: ent_2_0_1.id,
    },
  });
  const ent_2_0_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Need` } },
    update: {},
    create: {
      name: `Consumer Need`,
      description: `=VLOOKUP(D125, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [{"name":"has parent need","target":"Consumer Need","cardinality":"M:1","type":"Self-Reference","description":"Consumer Needs can form a hierarchy (e.g. Convenience > Time Saving)"},{"name":"addressed by","target":"Product Category Feature","cardinality":"M:M","type":"Association","description":"Consumer Needs are fulfilled by Product Category Features \u2014 the key bridge between demand and supply"},{"name":"competes with","target":"Consumer Need","cardinality":"M:M","type":"Association","description":"Some needs trade off against each other (e.g. convenience vs. health)"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-0` },
    update: {},
    create: {
      id: `seed-2-0-2-0`,
      name: 'need_id', type: 'String',
      required: true, description: 'Globally unique identifier for the consumer need',
      sortOrder: 0, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-1` },
    update: {},
    create: {
      id: `seed-2-0-2-1`,
      name: 'need_code', type: 'String',
      required: true, description: 'Short code (e.g. FUNC_TIME_SAVE, EMO_HEALTH_OPT, SOC_STATUS)',
      sortOrder: 1, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-2` },
    update: {},
    create: {
      id: `seed-2-0-2-2`,
      name: 'need_name', type: 'String',
      required: true, description: 'Human-readable name of the need (e.g. Time Saving, Health Optimization)',
      sortOrder: 2, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-3` },
    update: {},
    create: {
      id: `seed-2-0-2-3`,
      name: 'need_category', type: 'Enum(Functional|Emotional|Social|Economic|Experiential|Epistemic)',
      required: true, description: 'Broad category of the need',
      sortOrder: 3, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-4` },
    update: {},
    create: {
      id: `seed-2-0-2-4`,
      name: 'need_description', type: 'String',
      required: true, description: 'What this need represents and how it manifests in purchasing behavior',
      sortOrder: 4, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-5` },
    update: {},
    create: {
      id: `seed-2-0-2-5`,
      name: 'intensity_scale', type: 'Enum(Low|Moderate|High|Critical)',
      required: false, description: 'Default intensity when unspecified',
      sortOrder: 5, entityId: ent_2_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-2-6` },
    update: {},
    create: {
      id: `seed-2-0-2-6`,
      name: 'parent_need_id', type: 'String',
      required: false, description: 'FK to a broader parent need for hierarchical need taxonomies',
      sortOrder: 6, entityId: ent_2_0_2.id,
    },
  });
  const ent_2_0_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment` } },
    update: {},
    create: {
      name: `Consumer Segment`,
      description: `=VLOOKUP(D126, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [{"name":"belongs to scheme","target":"Consumer Segmentation Scheme","cardinality":"M:1","type":"Association","description":"A Consumer Segment is defined within a Segmentation Scheme"},{"name":"has parent","target":"Consumer Segment","cardinality":"M:1","type":"Self-Reference","description":"Consumer Segments may form a hierarchy within a scheme (e.g. PRIZM Group to Type)"},{"name":"has needs","target":"Consumer Need","cardinality":"M:M","type":"Association","description":"A Consumer Segment exhibits one or more Consumer Needs (via Consumer Segment Need Map)"},{"name":"exhibits behavior","target":"Consumer Behavior Pattern","cardinality":"1:M","type":"Composition","description":"A Consumer Segment is characterized by observable Behavior Patterns"},{"name":"at lifestage","target":"Consumer Lifestage","cardinality":"M:M","type":"Association","description":"Consumer Segments contain members at various lifestages (via Consumer Segment Lifestage Map)"},{"name":"has profile","target":"Consumer Segment Profile","cardinality":"1:1","type":"Composition","description":"A Consumer Segment has a detailed statistical profile"},{"name":"mapped to","target":"Consumer Segment Mapping","cardinality":"1:M","type":"Association","description":"A Consumer Segment can be cross-referenced to segments in other schemes"},{"name":"has geo population","target":"Consumer Segment Geo Population","cardinality":"1:M","type":"Composition","description":"A Consumer Segment has population records across geo-regions and time periods"},{"name":"purchases","target":"Market Product Category","cardinality":"M:M","type":"Association","description":"Consumer Segments have affinities for specific Market Product Categories"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-0` },
    update: {},
    create: {
      id: `seed-2-0-3-0`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'Globally unique identifier for the consumer segment',
      sortOrder: 0, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-1` },
    update: {},
    create: {
      id: `seed-2-0-3-1`,
      name: 'scheme_id', type: 'String',
      required: true, description: 'FK to the Segmentation Scheme that defines this segment',
      sortOrder: 1, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-2` },
    update: {},
    create: {
      id: `seed-2-0-3-2`,
      name: 'segment_code', type: 'String',
      required: true, description: 'Short code within the scheme (e.g. 04 in PRIZM, INNOV in VALS)',
      sortOrder: 2, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-3` },
    update: {},
    create: {
      id: `seed-2-0-3-3`,
      name: 'segment_name', type: 'String',
      required: true, description: 'Human-readable name of the segment (e.g. Young Digerati)',
      sortOrder: 3, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-4` },
    update: {},
    create: {
      id: `seed-2-0-3-4`,
      name: 'segment_description', type: 'String',
      required: true, description: 'Narrative description of who this segment represents',
      sortOrder: 4, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-5` },
    update: {},
    create: {
      id: `seed-2-0-3-5`,
      name: 'tier', type: 'Enum(Group|Type|SubType)',
      required: false, description: 'Hierarchy level if the scheme has tiers (e.g. PRIZM Group vs Type)',
      sortOrder: 5, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-6` },
    update: {},
    create: {
      id: `seed-2-0-3-6`,
      name: 'parent_segment_id', type: 'String',
      required: false, description: 'FK to parent Consumer Segment in hierarchical schemes',
      sortOrder: 6, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-7` },
    update: {},
    create: {
      id: `seed-2-0-3-7`,
      name: 'lifecycle_status', type: 'Enum(Emerging|Established|Declining|Deprecated|Merged)',
      required: true, description: 'Current lifecycle state of the segment definition',
      sortOrder: 7, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-8` },
    update: {},
    create: {
      id: `seed-2-0-3-8`,
      name: 'estimated_population', type: 'Integer',
      required: false, description: 'Estimated total population across all geo-regions (derived from Segment Geo Population)',
      sortOrder: 8, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-9` },
    update: {},
    create: {
      id: `seed-2-0-3-9`,
      name: 'population_share_pct', type: 'Decimal',
      required: false, description: 'Percentage of total addressable population',
      sortOrder: 9, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-10` },
    update: {},
    create: {
      id: `seed-2-0-3-10`,
      name: 'median_age', type: 'Decimal',
      required: false, description: 'Median age of segment members',
      sortOrder: 10, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-11` },
    update: {},
    create: {
      id: `seed-2-0-3-11`,
      name: 'median_income', type: 'Decimal',
      required: false, description: 'Median household income of segment members',
      sortOrder: 11, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-12` },
    update: {},
    create: {
      id: `seed-2-0-3-12`,
      name: 'urbanicity', type: 'Enum(Urban|Suburban|Rural|Mixed)',
      required: false, description: 'Predominant urbanicity of segment members (derived from geographic criteria)',
      sortOrder: 12, entityId: ent_2_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-3-13` },
    update: {},
    create: {
      id: `seed-2-0-3-13`,
      name: 'tags', type: 'String',
      required: false, description: 'Comma-separated freeform labels for discoverability (e.g. affluent, tech-savvy, urban)',
      sortOrder: 13, entityId: ent_2_0_3.id,
    },
  });
  const ent_2_0_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment Geo Population` } },
    update: {},
    create: {
      name: `Consumer Segment Geo Population`,
      description: `=VLOOKUP(D127, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-0` },
    update: {},
    create: {
      id: `seed-2-0-4-0`,
      name: 'segment_geo_pop_id', type: 'String',
      required: true, description: 'Globally unique identifier for this population record',
      sortOrder: 0, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-1` },
    update: {},
    create: {
      id: `seed-2-0-4-1`,
      name: 'segment_id', type: 'String',
      required: true, description: 'FK to Consumer Segment',
      sortOrder: 1, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-2` },
    update: {},
    create: {
      id: `seed-2-0-4-2`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'FK to Market Geo-Region (typically at the lowest/Locality level)',
      sortOrder: 2, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-3` },
    update: {},
    create: {
      id: `seed-2-0-4-3`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period (e.g. 2025, Q1-2025, 2025-H1)',
      sortOrder: 3, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-4` },
    update: {},
    create: {
      id: `seed-2-0-4-4`,
      name: 'population_count', type: 'Integer',
      required: true, description: 'Absolute number of individuals/households in this segment in this geo-region',
      sortOrder: 4, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-5` },
    update: {},
    create: {
      id: `seed-2-0-4-5`,
      name: 'region_share_pct', type: 'Decimal',
      required: false, description: 'Percentage of total geo-region population belonging to this segment',
      sortOrder: 5, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-6` },
    update: {},
    create: {
      id: `seed-2-0-4-6`,
      name: 'segment_concentration_pct', type: 'Decimal',
      required: false, description: 'Percentage of total segment population residing in this geo-region (geographic concentration)',
      sortOrder: 6, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-7` },
    update: {},
    create: {
      id: `seed-2-0-4-7`,
      name: 'penetration_index', type: 'Decimal',
      required: false, description: 'Penetration index where 100 = national/global average. E.g. 250 means 2.5x over-represented',
      sortOrder: 7, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-8` },
    update: {},
    create: {
      id: `seed-2-0-4-8`,
      name: 'growth_rate_pct', type: 'Decimal',
      required: false, description: 'Period-over-period population growth rate for this segment in this geo-region',
      sortOrder: 8, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-9` },
    update: {},
    create: {
      id: `seed-2-0-4-9`,
      name: 'population_type', type: 'Enum(Actual|Estimated|Projected)',
      required: true, description: 'Whether this is a census-derived actual, a modeled estimate, or a forward-looking projection',
      sortOrder: 9, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-10` },
    update: {},
    create: {
      id: `seed-2-0-4-10`,
      name: 'projection_horizon', type: 'String',
      required: false, description: 'For Projected type: how far forward (e.g. 2030, +5Y). Null for Actual/Estimated',
      sortOrder: 10, entityId: ent_2_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-4-11` },
    update: {},
    create: {
      id: `seed-2-0-4-11`,
      name: 'source_id', type: 'String',
      required: false, description: 'FK to Segment Geo Population Source for data provenance',
      sortOrder: 11, entityId: ent_2_0_4.id,
    },
  });
  const ent_2_0_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment Lifestage Map` } },
    update: {},
    create: {
      name: `Consumer Segment Lifestage Map`,
      description: `=VLOOKUP(D128, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-5-0` },
    update: {},
    create: {
      id: `seed-2-0-5-0`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'FK to Consumer Segment',
      sortOrder: 0, entityId: ent_2_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-5-1` },
    update: {},
    create: {
      id: `seed-2-0-5-1`,
      name: 'lifestage_id', type: 'String',
      required: true, description: 'FK to Consumer Lifestage',
      sortOrder: 1, entityId: ent_2_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-5-2` },
    update: {},
    create: {
      id: `seed-2-0-5-2`,
      name: 'prevalence_pct', type: 'Decimal',
      required: false, description: 'Percentage of segment members at this lifestage',
      sortOrder: 2, entityId: ent_2_0_5.id,
    },
  });
  const ent_2_0_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment Mapping` } },
    update: {},
    create: {
      name: `Consumer Segment Mapping`,
      description: `=VLOOKUP(D129, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-0` },
    update: {},
    create: {
      id: `seed-2-0-6-0`,
      name: 'mapping_id', type: 'String',
      required: true, description: 'Globally unique identifier for the mapping',
      sortOrder: 0, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-1` },
    update: {},
    create: {
      id: `seed-2-0-6-1`,
      name: 'source_consumer_segment_id', type: 'String',
      required: true, description: 'FK to the source Consumer Segment',
      sortOrder: 1, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-2` },
    update: {},
    create: {
      id: `seed-2-0-6-2`,
      name: 'target_consumer_segment_id', type: 'String',
      required: true, description: 'FK to the target Consumer Segment',
      sortOrder: 2, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-3` },
    update: {},
    create: {
      id: `seed-2-0-6-3`,
      name: 'mapping_type', type: 'Enum(Equivalent|Overlaps|SubsetOf|SupersetOf|Approximate)',
      required: true, description: 'Nature of the mapping relationship',
      sortOrder: 3, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-4` },
    update: {},
    create: {
      id: `seed-2-0-6-4`,
      name: 'confidence', type: 'Decimal',
      required: true, description: 'Confidence score (0.0-1.0) that this mapping is accurate',
      sortOrder: 4, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-5` },
    update: {},
    create: {
      id: `seed-2-0-6-5`,
      name: 'overlap_pct', type: 'Decimal',
      required: false, description: 'Estimated percentage of population overlap between segments',
      sortOrder: 5, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-6` },
    update: {},
    create: {
      id: `seed-2-0-6-6`,
      name: 'mapping_method', type: 'Enum(ManualExpert|Statistical|MLDerived|VendorProvided)',
      required: false, description: 'How the mapping was derived',
      sortOrder: 6, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-7` },
    update: {},
    create: {
      id: `seed-2-0-6-7`,
      name: 'notes', type: 'String',
      required: false, description: 'Qualitative notes on the mapping quality and caveats',
      sortOrder: 7, entityId: ent_2_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-6-8` },
    update: {},
    create: {
      id: `seed-2-0-6-8`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this mapping was established',
      sortOrder: 8, entityId: ent_2_0_6.id,
    },
  });
  const ent_2_0_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment Need Map` } },
    update: {},
    create: {
      name: `Consumer Segment Need Map`,
      description: `=VLOOKUP(D130, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-7-0` },
    update: {},
    create: {
      id: `seed-2-0-7-0`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'FK to Consumer Segment',
      sortOrder: 0, entityId: ent_2_0_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-7-1` },
    update: {},
    create: {
      id: `seed-2-0-7-1`,
      name: 'need_id', type: 'String',
      required: true, description: 'FK to Consumer Need',
      sortOrder: 1, entityId: ent_2_0_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-7-2` },
    update: {},
    create: {
      id: `seed-2-0-7-2`,
      name: 'intensity', type: 'Enum(Low|Moderate|High|Critical)',
      required: true, description: 'How intensely this segment experiences this need',
      sortOrder: 2, entityId: ent_2_0_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-7-3` },
    update: {},
    create: {
      id: `seed-2-0-7-3`,
      name: 'rank', type: 'Integer',
      required: false, description: 'Relative priority rank of this need within the segment (1 = highest)',
      sortOrder: 3, entityId: ent_2_0_7.id,
    },
  });
  const ent_2_0_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segment Profile` } },
    update: {},
    create: {
      name: `Consumer Segment Profile`,
      description: `=VLOOKUP(D131, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-0` },
    update: {},
    create: {
      id: `seed-2-0-8-0`,
      name: 'profile_id', type: 'String',
      required: true, description: 'Globally unique identifier for the profile',
      sortOrder: 0, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-1` },
    update: {},
    create: {
      id: `seed-2-0-8-1`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'FK to the Consumer Segment this profile describes',
      sortOrder: 1, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-2` },
    update: {},
    create: {
      id: `seed-2-0-8-2`,
      name: 'profile_date', type: 'Date',
      required: true, description: 'Date this profile was compiled or refreshed',
      sortOrder: 2, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-3` },
    update: {},
    create: {
      id: `seed-2-0-8-3`,
      name: 'median_age', type: 'Decimal',
      required: false, description: 'Median age of segment members',
      sortOrder: 3, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-4` },
    update: {},
    create: {
      id: `seed-2-0-8-4`,
      name: 'gender_split_male_pct', type: 'Decimal',
      required: false, description: 'Percentage male',
      sortOrder: 4, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-5` },
    update: {},
    create: {
      id: `seed-2-0-8-5`,
      name: 'gender_split_female_pct', type: 'Decimal',
      required: false, description: 'Percentage female',
      sortOrder: 5, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-6` },
    update: {},
    create: {
      id: `seed-2-0-8-6`,
      name: 'median_hh_income', type: 'Decimal',
      required: false, description: 'Median household income',
      sortOrder: 6, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-7` },
    update: {},
    create: {
      id: `seed-2-0-8-7`,
      name: 'avg_household_size', type: 'Decimal',
      required: false, description: 'Average persons per household',
      sortOrder: 7, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-8` },
    update: {},
    create: {
      id: `seed-2-0-8-8`,
      name: 'homeownership_rate_pct', type: 'Decimal',
      required: false, description: 'Percentage who own vs rent',
      sortOrder: 8, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-9` },
    update: {},
    create: {
      id: `seed-2-0-8-9`,
      name: 'top_media_channels', type: 'String',
      required: false, description: 'Comma-separated top media consumption channels',
      sortOrder: 9, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-10` },
    update: {},
    create: {
      id: `seed-2-0-8-10`,
      name: 'top_category_affinities', type: 'String',
      required: false, description: 'Comma-separated top product category affinities with index values',
      sortOrder: 10, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-11` },
    update: {},
    create: {
      id: `seed-2-0-8-11`,
      name: 'top_geo_concentrations', type: 'String',
      required: false, description: 'Comma-separated top geographic regions by penetration index',
      sortOrder: 11, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-12` },
    update: {},
    create: {
      id: `seed-2-0-8-12`,
      name: 'channel_pref_ecommerce_pct', type: 'Decimal',
      required: false, description: 'Percentage of spend via e-commerce channel',
      sortOrder: 12, entityId: ent_2_0_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-8-13` },
    update: {},
    create: {
      id: `seed-2-0-8-13`,
      name: 'channel_pref_retail_pct', type: 'Decimal',
      required: false, description: 'Percentage of spend via physical retail',
      sortOrder: 13, entityId: ent_2_0_8.id,
    },
  });
  const ent_2_0_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segmentation Criterion` } },
    update: {},
    create: {
      name: `Consumer Segmentation Criterion`,
      description: `=VLOOKUP(D132, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-0` },
    update: {},
    create: {
      id: `seed-2-0-9-0`,
      name: 'criterion_id', type: 'String',
      required: true, description: 'Globally unique identifier for the criterion',
      sortOrder: 0, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-1` },
    update: {},
    create: {
      id: `seed-2-0-9-1`,
      name: 'dimension_id', type: 'String',
      required: true, description: 'FK to the Segmentation Dimension this criterion filters on',
      sortOrder: 1, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-2` },
    update: {},
    create: {
      id: `seed-2-0-9-2`,
      name: 'consumer_segment_id', type: 'String',
      required: true, description: 'FK to the Consumer Segment this criterion helps define',
      sortOrder: 2, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-3` },
    update: {},
    create: {
      id: `seed-2-0-9-3`,
      name: 'operator', type: 'Enum(EQ|NEQ|GT|GTE|LT|LTE|BETWEEN|IN|NOT_IN|CONTAINS|MATCHES)',
      required: true, description: 'Comparison operator for the criterion',
      sortOrder: 3, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-4` },
    update: {},
    create: {
      id: `seed-2-0-9-4`,
      name: 'value', type: 'String',
      required: true, description: 'Comparison value (scalar, range lower bound, or comma-separated list depending on operator)',
      sortOrder: 4, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-5` },
    update: {},
    create: {
      id: `seed-2-0-9-5`,
      name: 'value_upper', type: 'Decimal',
      required: false, description: 'Upper bound value (used with BETWEEN operator)',
      sortOrder: 5, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-6` },
    update: {},
    create: {
      id: `seed-2-0-9-6`,
      name: 'weight', type: 'Decimal',
      required: false, description: 'Relative importance of this criterion in segment definition (0.0-1.0). Default 1.0',
      sortOrder: 6, entityId: ent_2_0_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-9-7` },
    update: {},
    create: {
      id: `seed-2-0-9-7`,
      name: 'is_required', type: 'Boolean',
      required: true, description: 'If true, criterion is mandatory for segment membership. If false, it is a soft/scoring criterion',
      sortOrder: 7, entityId: ent_2_0_9.id,
    },
  });
  const ent_2_0_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segmentation Dimension` } },
    update: {},
    create: {
      name: `Consumer Segmentation Dimension`,
      description: `=VLOOKUP(D133, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-0` },
    update: {},
    create: {
      id: `seed-2-0-10-0`,
      name: 'dimension_id', type: 'String',
      required: true, description: 'Globally unique identifier for the dimension',
      sortOrder: 0, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-1` },
    update: {},
    create: {
      id: `seed-2-0-10-1`,
      name: 'dimension_code', type: 'String',
      required: true, description: 'Short code (e.g. DEM_AGE, BHV_LOYALTY, GEO_POP_DENSITY)',
      sortOrder: 1, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-2` },
    update: {},
    create: {
      id: `seed-2-0-10-2`,
      name: 'dimension_name', type: 'String',
      required: true, description: 'Human-readable name of the dimension',
      sortOrder: 2, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-3` },
    update: {},
    create: {
      id: `seed-2-0-10-3`,
      name: 'dimension_category', type: 'Enum(Demographic|Psychographic|Behavioral|Geographic|Firmographic|NeedsBased|OccasionBased|Technographic)',
      required: true, description: 'Broad category of the dimension',
      sortOrder: 3, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-4` },
    update: {},
    create: {
      id: `seed-2-0-10-4`,
      name: 'data_type', type: 'Enum(Continuous|Categorical|Ordinal|Boolean)',
      required: true, description: 'Data type of dimension values',
      sortOrder: 4, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-5` },
    update: {},
    create: {
      id: `seed-2-0-10-5`,
      name: 'unit_of_measure', type: 'String',
      required: false, description: 'Unit if applicable (e.g. years, USD, transactions/month)',
      sortOrder: 5, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-6` },
    update: {},
    create: {
      id: `seed-2-0-10-6`,
      name: 'value_range_min', type: 'Decimal',
      required: false, description: 'Minimum valid value (for continuous dimensions)',
      sortOrder: 6, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-7` },
    update: {},
    create: {
      id: `seed-2-0-10-7`,
      name: 'value_range_max', type: 'Decimal',
      required: false, description: 'Maximum valid value (for continuous dimensions)',
      sortOrder: 7, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-8` },
    update: {},
    create: {
      id: `seed-2-0-10-8`,
      name: 'allowed_values', type: 'String',
      required: false, description: 'Comma-separated enumerated valid values (for categorical/ordinal dimensions)',
      sortOrder: 8, entityId: ent_2_0_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-10-9` },
    update: {},
    create: {
      id: `seed-2-0-10-9`,
      name: 'description', type: 'String',
      required: false, description: 'What this dimension measures and why it matters for segmentation',
      sortOrder: 9, entityId: ent_2_0_10.id,
    },
  });
  const ent_2_0_11 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Consumer Segmentation Scheme` } },
    update: {},
    create: {
      name: `Consumer Segmentation Scheme`,
      description: `=VLOOKUP(D134, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 11,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-0` },
    update: {},
    create: {
      id: `seed-2-0-11-0`,
      name: 'scheme_id', type: 'String',
      required: true, description: 'Globally unique identifier for the segmentation scheme',
      sortOrder: 0, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-1` },
    update: {},
    create: {
      id: `seed-2-0-11-1`,
      name: 'scheme_code', type: 'String',
      required: true, description: 'Short code for the scheme (e.g. PRIZM, MOSAIC, VALS)',
      sortOrder: 1, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-2` },
    update: {},
    create: {
      id: `seed-2-0-11-2`,
      name: 'scheme_name', type: 'String',
      required: true, description: 'Full name of the segmentation scheme',
      sortOrder: 2, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-3` },
    update: {},
    create: {
      id: `seed-2-0-11-3`,
      name: 'provider', type: 'String',
      required: true, description: 'Organisation that maintains the scheme (e.g. Nielsen, Experian, SBI)',
      sortOrder: 3, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-4` },
    update: {},
    create: {
      id: `seed-2-0-11-4`,
      name: 'version', type: 'String',
      required: true, description: 'Version or edition of the scheme',
      sortOrder: 4, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-5` },
    update: {},
    create: {
      id: `seed-2-0-11-5`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this version of the scheme became active',
      sortOrder: 5, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-6` },
    update: {},
    create: {
      id: `seed-2-0-11-6`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this version was superseded (null if current)',
      sortOrder: 6, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-7` },
    update: {},
    create: {
      id: `seed-2-0-11-7`,
      name: 'methodology_type', type: 'Enum(Geodemographic|Psychographic|Behavioral|NeedsBased|Hybrid|Custom)',
      required: true, description: 'Type of methodology used to define segments',
      sortOrder: 7, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-8` },
    update: {},
    create: {
      id: `seed-2-0-11-8`,
      name: 'geographic_scope', type: 'String',
      required: true, description: 'Countries/regions where the scheme is applicable (e.g. US, Global)',
      sortOrder: 8, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-9` },
    update: {},
    create: {
      id: `seed-2-0-11-9`,
      name: 'segment_count', type: 'Integer',
      required: false, description: 'Total number of segments defined in this scheme version',
      sortOrder: 9, entityId: ent_2_0_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-11-10` },
    update: {},
    create: {
      id: `seed-2-0-11-10`,
      name: 'description', type: 'String',
      required: false, description: 'Narrative description of the scheme\'s purpose and approach',
      sortOrder: 10, entityId: ent_2_0_11.id,
    },
  });
  const ent_2_0_12 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_0.id, name: `Segment Geo Population Source` } },
    update: {},
    create: {
      name: `Segment Geo Population Source`,
      description: `=VLOOKUP(D135, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_0.id,
      relationships: [],
      sortOrder: 12,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-0` },
    update: {},
    create: {
      id: `seed-2-0-12-0`,
      name: 'source_id', type: 'String',
      required: true, description: 'Globally unique identifier for the data source',
      sortOrder: 0, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-1` },
    update: {},
    create: {
      id: `seed-2-0-12-1`,
      name: 'source_name', type: 'String',
      required: true, description: 'Name of the data source (e.g. US Census Bureau, Nielsen Homescan, Experian Mosaic)',
      sortOrder: 1, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-2` },
    update: {},
    create: {
      id: `seed-2-0-12-2`,
      name: 'source_type', type: 'Enum(Census|PanelProvider|SchemeProvider|ModeledEstimate|InternalAnalytics)',
      required: true, description: 'Type of data source',
      sortOrder: 2, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-3` },
    update: {},
    create: {
      id: `seed-2-0-12-3`,
      name: 'provider_org', type: 'String',
      required: false, description: 'Organisation that produces the data',
      sortOrder: 3, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-4` },
    update: {},
    create: {
      id: `seed-2-0-12-4`,
      name: 'methodology', type: 'String',
      required: false, description: 'Brief description of estimation methodology',
      sortOrder: 4, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-5` },
    update: {},
    create: {
      id: `seed-2-0-12-5`,
      name: 'confidence_level', type: 'Enum(High|Medium|Low)',
      required: false, description: 'General reliability rating of this source',
      sortOrder: 5, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-6` },
    update: {},
    create: {
      id: `seed-2-0-12-6`,
      name: 'vintage_date', type: 'Date',
      required: true, description: 'Date the source data was published or last refreshed',
      sortOrder: 6, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-7` },
    update: {},
    create: {
      id: `seed-2-0-12-7`,
      name: 'geographic_coverage', type: 'String',
      required: false, description: 'Geographic scope covered by this source (e.g. US, EU, Global)',
      sortOrder: 7, entityId: ent_2_0_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-0-12-8` },
    update: {},
    create: {
      id: `seed-2-0-12-8`,
      name: 'update_frequency', type: 'String',
      required: false, description: 'How often the source is refreshed (e.g. Annual, Quarterly, Monthly)',
      sortOrder: 8, entityId: ent_2_0_12.id,
    },
  });
  const sub_2_1 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_2.id, name: 'Geo Region Model' } },
    update: {},
    create: { name: 'Geo Region Model', modelId: model_2.id, sortOrder: 1 },
  });
  const ent_2_1_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_1.id, name: `Geo Region Segmentation Dimension Value` } },
    update: {},
    create: {
      name: `Geo Region Segmentation Dimension Value`,
      description: `=VLOOKUP(D136, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_1.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-0` },
    update: {},
    create: {
      id: `seed-2-1-0-0`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'FK to Market Geo-Region being tagged',
      sortOrder: 0, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-1` },
    update: {},
    create: {
      id: `seed-2-1-0-1`,
      name: 'dimension_id', type: 'String',
      required: true, description: 'FK to Segmentation Dimension (must be dimension_category = GEOGRAPHIC)',
      sortOrder: 1, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-2` },
    update: {},
    create: {
      id: `seed-2-1-0-2`,
      name: 'dimension_name', type: 'String',
      required: true, description: 'Name of the geographic dimension (e.g. Population Density, Climate Zone, Economic Tier)',
      sortOrder: 2, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-3` },
    update: {},
    create: {
      id: `seed-2-1-0-3`,
      name: 'dimension_value', type: 'String',
      required: true, description: 'The assigned value on this dimension (e.g. Urban, Temperate, High)',
      sortOrder: 3, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-4` },
    update: {},
    create: {
      id: `seed-2-1-0-4`,
      name: 'effective_date', type: 'Date',
      required: false, description: 'Date from which this classification is valid',
      sortOrder: 4, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-5` },
    update: {},
    create: {
      id: `seed-2-1-0-5`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date on which this classification expires (null if current)',
      sortOrder: 5, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-6` },
    update: {},
    create: {
      id: `seed-2-1-0-6`,
      name: 'source', type: 'String',
      required: false, description: 'Data source for the classification (e.g. Census Bureau, Eurostat, modeled)',
      sortOrder: 6, entityId: ent_2_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-0-7` },
    update: {},
    create: {
      id: `seed-2-1-0-7`,
      name: 'confidence', type: 'Decimal',
      required: false, description: 'Confidence score (0.0-1.0) for modeled or estimated classifications',
      sortOrder: 7, entityId: ent_2_1_0.id,
    },
  });
  const ent_2_1_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_1.id, name: `Market Geo-Region` } },
    update: {},
    create: {
      name: `Market Geo-Region`,
      description: `=VLOOKUP(D137, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_1.id,
      relationships: [{"name":"has parent","target":"Market Geo-Region","cardinality":"M:1","type":"Self-Reference","description":"Market Geo-Regions form a geographic hierarchy"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-1-0` },
    update: {},
    create: {
      id: `seed-2-1-1-0`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'Unique identifier for the market geo-region',
      sortOrder: 0, entityId: ent_2_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-1-1` },
    update: {},
    create: {
      id: `seed-2-1-1-1`,
      name: 'geo_region_name', type: 'String',
      required: true, description: 'Descriptive name of the region',
      sortOrder: 1, entityId: ent_2_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-1-2` },
    update: {},
    create: {
      id: `seed-2-1-1-2`,
      name: 'geo_region_type', type: 'String',
      required: true, description: 'Type of the geo-region. One of Geographic. Macro-Region, Country, City, Administrative, Locality, Economic, Micro-Region (Zip)',
      sortOrder: 2, entityId: ent_2_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-1-3` },
    update: {},
    create: {
      id: `seed-2-1-1-3`,
      name: 'source_standard', type: 'String',
      required: false, description: 'Standards source from which the data is populated - e.g. ISO-3166, UN M49 etc…',
      sortOrder: 3, entityId: ent_2_1_1.id,
    },
  });
  const ent_2_1_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_1.id, name: `Market Geo-Region Hierarchy` } },
    update: {},
    create: {
      name: `Market Geo-Region Hierarchy`,
      description: `=VLOOKUP(D138, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_1.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-2-0` },
    update: {},
    create: {
      id: `seed-2-1-2-0`,
      name: 'geo_region_hierarchy_id', type: 'String',
      required: true, description: 'Unique identifier for the market geo-region hierarchy',
      sortOrder: 0, entityId: ent_2_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-2-1` },
    update: {},
    create: {
      id: `seed-2-1-2-1`,
      name: 'geo_region_hierarchy_name', type: 'String',
      required: true, description: 'Descriptive name of the market geo-region hierarchy',
      sortOrder: 1, entityId: ent_2_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-2-2` },
    update: {},
    create: {
      id: `seed-2-1-2-2`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'Unique identifier for the market geo-region',
      sortOrder: 2, entityId: ent_2_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-2-3` },
    update: {},
    create: {
      id: `seed-2-1-2-3`,
      name: 'geo_region_name', type: 'String',
      required: true, description: 'Descriptive name of the region',
      sortOrder: 3, entityId: ent_2_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-1-2-4` },
    update: {},
    create: {
      id: `seed-2-1-2-4`,
      name: 'parent_region_id', type: 'String',
      required: false, description: 'Parent region id',
      sortOrder: 4, entityId: ent_2_1_2.id,
    },
  });
  const sub_2_2 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_2.id, name: 'Market Product Model' } },
    update: {},
    create: { name: 'Market Product Model', modelId: model_2.id, sortOrder: 2 },
  });
  const ent_2_2_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Industry Category` } },
    update: {},
    create: {
      name: `Industry Category`,
      description: `=VLOOKUP(D139, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-0` },
    update: {},
    create: {
      id: `seed-2-2-0-0`,
      name: 'industry_category_id', type: 'String',
      required: true, description: 'Unique identifier for the industry',
      sortOrder: 0, entityId: ent_2_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-1` },
    update: {},
    create: {
      id: `seed-2-2-0-1`,
      name: 'industry_code', type: 'String',
      required: true, description: 'Industry/sub industry code - e.g. 31-33 in NAICS, or C in ISIC',
      sortOrder: 1, entityId: ent_2_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-2` },
    update: {},
    create: {
      id: `seed-2-2-0-2`,
      name: 'industry_name', type: 'String',
      required: true, description: 'Descriptive name for the industry code (e.g. Manufacturing in NAICS for the 31-33 codes)',
      sortOrder: 2, entityId: ent_2_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-3` },
    update: {},
    create: {
      id: `seed-2-2-0-3`,
      name: 'parent_industry_code', type: 'String',
      required: true, description: 'Parent industry code',
      sortOrder: 3, entityId: ent_2_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-4` },
    update: {},
    create: {
      id: `seed-2-2-0-4`,
      name: 'level_name', type: 'String',
      required: true, description: 'Level name (e.g. Sector in NAICS) to which this code belongs in the appropriate standard',
      sortOrder: 4, entityId: ent_2_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-0-5` },
    update: {},
    create: {
      id: `seed-2-2-0-5`,
      name: 'standard_name', type: 'String',
      required: true, description: 'Industry standards name (e.g. SIC, NAICS, GICS)',
      sortOrder: 5, entityId: ent_2_2_0.id,
    },
  });
  const ent_2_2_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Industry Category Hierarchy` } },
    update: {},
    create: {
      name: `Industry Category Hierarchy`,
      description: `=VLOOKUP(D140, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-1-0` },
    update: {},
    create: {
      id: `seed-2-2-1-0`,
      name: 'hierarchy_id', type: 'String',
      required: true, description: '',
      sortOrder: 0, entityId: ent_2_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-1-1` },
    update: {},
    create: {
      id: `seed-2-2-1-1`,
      name: 'standard_name', type: 'String',
      required: true, description: 'Refers to the Industry Category standard (e.g. NAICS)',
      sortOrder: 1, entityId: ent_2_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-1-2` },
    update: {},
    create: {
      id: `seed-2-2-1-2`,
      name: 'level_name', type: 'String',
      required: true, description: 'E.g. Sectory, Sub Sector etc.. In NAICS',
      sortOrder: 2, entityId: ent_2_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-1-3` },
    update: {},
    create: {
      id: `seed-2-2-1-3`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'With 1 being the lowest (key) level',
      sortOrder: 3, entityId: ent_2_2_1.id,
    },
  });
  const ent_2_2_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Market Product Category` } },
    update: {},
    create: {
      name: `Market Product Category`,
      description: `=VLOOKUP(D141, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-0` },
    update: {},
    create: {
      id: `seed-2-2-2-0`,
      name: 'market_product_category_id', type: 'String',
      required: true, description: 'Unique identifier for the market category',
      sortOrder: 0, entityId: ent_2_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-1` },
    update: {},
    create: {
      id: `seed-2-2-2-1`,
      name: 'category_code', type: 'String',
      required: true, description: 'Category code from the standard (e.g. 65010000 in GPC)',
      sortOrder: 1, entityId: ent_2_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-2` },
    update: {},
    create: {
      id: `seed-2-2-2-2`,
      name: 'category_name', type: 'String',
      required: true, description: 'Category name from the standard (e.g. Computing Hardware for 65010000 in GPC)',
      sortOrder: 2, entityId: ent_2_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-3` },
    update: {},
    create: {
      id: `seed-2-2-2-3`,
      name: 'parent_category_code', type: 'String',
      required: true, description: 'Parent category for hierarchical structure',
      sortOrder: 3, entityId: ent_2_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-4` },
    update: {},
    create: {
      id: `seed-2-2-2-4`,
      name: 'level_name', type: 'String',
      required: true, description: 'Level name (e.g. Segment) to which this code belongs in the appropriate standard',
      sortOrder: 4, entityId: ent_2_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-2-5` },
    update: {},
    create: {
      id: `seed-2-2-2-5`,
      name: 'standard_name', type: 'String',
      required: true, description: 'Refers to the Market Product Category standard (e.g. GPC)',
      sortOrder: 5, entityId: ent_2_2_2.id,
    },
  });
  const ent_2_2_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Market Product Category Hierarchy` } },
    update: {},
    create: {
      name: `Market Product Category Hierarchy`,
      description: `=VLOOKUP(D142, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-3-0` },
    update: {},
    create: {
      id: `seed-2-2-3-0`,
      name: 'hierarchy_id', type: 'String',
      required: true, description: '',
      sortOrder: 0, entityId: ent_2_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-3-1` },
    update: {},
    create: {
      id: `seed-2-2-3-1`,
      name: 'standard_name', type: 'String',
      required: true, description: 'Refers to the Market Product Category standard (e.g. GPC)',
      sortOrder: 1, entityId: ent_2_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-3-2` },
    update: {},
    create: {
      id: `seed-2-2-3-2`,
      name: 'level_name', type: 'String',
      required: true, description: 'E.g. Segment, Family',
      sortOrder: 2, entityId: ent_2_2_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-3-3` },
    update: {},
    create: {
      id: `seed-2-2-3-3`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'With 1 being the lowest (key) level',
      sortOrder: 3, entityId: ent_2_2_3.id,
    },
  });
  const ent_2_2_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Market Product Category Standard` } },
    update: {},
    create: {
      name: `Market Product Category Standard`,
      description: `=VLOOKUP(D143, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-4-0` },
    update: {},
    create: {
      id: `seed-2-2-4-0`,
      name: 'standard_name', type: 'String',
      required: true, description: 'E.g. GPC, UNSPSC, …',
      sortOrder: 0, entityId: ent_2_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-4-1` },
    update: {},
    create: {
      id: `seed-2-2-4-1`,
      name: 'standard_description', type: 'String',
      required: true, description: '',
      sortOrder: 1, entityId: ent_2_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-4-2` },
    update: {},
    create: {
      id: `seed-2-2-4-2`,
      name: 'standard_organization', type: 'String',
      required: true, description: 'The parent organization (e.g. GS1 for GPC)',
      sortOrder: 2, entityId: ent_2_2_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-4-3` },
    update: {},
    create: {
      id: `seed-2-2-4-3`,
      name: 'Version', type: 'String',
      required: true, description: 'The specific version of the released standard',
      sortOrder: 3, entityId: ent_2_2_4.id,
    },
  });
  const ent_2_2_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Product Category Feature` } },
    update: {},
    create: {
      name: `Product Category Feature`,
      description: `=VLOOKUP(D144, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-0` },
    update: {},
    create: {
      id: `seed-2-2-5-0`,
      name: 'feature_id', type: 'String',
      required: true, description: '',
      sortOrder: 0, entityId: ent_2_2_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-1` },
    update: {},
    create: {
      id: `seed-2-2-5-1`,
      name: 'feature_name', type: 'String',
      required: true, description: '',
      sortOrder: 1, entityId: ent_2_2_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-2` },
    update: {},
    create: {
      id: `seed-2-2-5-2`,
      name: 'feature_code', type: 'String',
      required: true, description: '',
      sortOrder: 2, entityId: ent_2_2_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-3` },
    update: {},
    create: {
      id: `seed-2-2-5-3`,
      name: 'feature_description', type: 'String',
      required: true, description: '',
      sortOrder: 3, entityId: ent_2_2_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-4` },
    update: {},
    create: {
      id: `seed-2-2-5-4`,
      name: 'unit', type: 'String',
      required: true, description: '',
      sortOrder: 4, entityId: ent_2_2_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-5-5` },
    update: {},
    create: {
      id: `seed-2-2-5-5`,
      name: 'standard_name', type: 'String',
      required: true, description: 'E.g. GS1 GDM, ECLASS, ETIM, …',
      sortOrder: 5, entityId: ent_2_2_5.id,
    },
  });
  const ent_2_2_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Product Category Feature Map` } },
    update: {},
    create: {
      name: `Product Category Feature Map`,
      description: `=VLOOKUP(D145, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-6-0` },
    update: {},
    create: {
      id: `seed-2-2-6-0`,
      name: 'feature_id', type: 'String',
      required: true, description: '',
      sortOrder: 0, entityId: ent_2_2_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-6-1` },
    update: {},
    create: {
      id: `seed-2-2-6-1`,
      name: 'feature_name', type: 'String',
      required: true, description: '',
      sortOrder: 1, entityId: ent_2_2_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-6-2` },
    update: {},
    create: {
      id: `seed-2-2-6-2`,
      name: 'market_product_category_id', type: 'String',
      required: true, description: '',
      sortOrder: 2, entityId: ent_2_2_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-6-3` },
    update: {},
    create: {
      id: `seed-2-2-6-3`,
      name: 'market_product_category_code', type: 'String',
      required: true, description: '',
      sortOrder: 3, entityId: ent_2_2_6.id,
    },
  });
  const ent_2_2_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Product Category Feature Value` } },
    update: {},
    create: {
      name: `Product Category Feature Value`,
      description: `=VLOOKUP(D146, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-7-0` },
    update: {},
    create: {
      id: `seed-2-2-7-0`,
      name: 'feature_id', type: 'String',
      required: true, description: '',
      sortOrder: 0, entityId: ent_2_2_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-7-1` },
    update: {},
    create: {
      id: `seed-2-2-7-1`,
      name: 'feature_name', type: 'String',
      required: true, description: '',
      sortOrder: 1, entityId: ent_2_2_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-7-2` },
    update: {},
    create: {
      id: `seed-2-2-7-2`,
      name: 'value', type: 'String',
      required: true, description: '',
      sortOrder: 2, entityId: ent_2_2_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-7-3` },
    update: {},
    create: {
      id: `seed-2-2-7-3`,
      name: 'unit', type: 'String',
      required: true, description: '',
      sortOrder: 3, entityId: ent_2_2_7.id,
    },
  });
  const ent_2_2_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Product Category Standards Mapping` } },
    update: {},
    create: {
      name: `Product Category Standards Mapping`,
      description: `=VLOOKUP(D147, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_2.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-8-0` },
    update: {},
    create: {
      id: `seed-2-2-8-0`,
      name: 'from_market_product_category_id', type: 'String',
      required: true, description: 'Unique identifier for the industry',
      sortOrder: 0, entityId: ent_2_2_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-8-1` },
    update: {},
    create: {
      id: `seed-2-2-8-1`,
      name: 'from_standard_name', type: 'String',
      required: false, description: '',
      sortOrder: 1, entityId: ent_2_2_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-8-2` },
    update: {},
    create: {
      id: `seed-2-2-8-2`,
      name: 'to_market_product_category_id', type: 'String',
      required: false, description: '',
      sortOrder: 2, entityId: ent_2_2_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-8-3` },
    update: {},
    create: {
      id: `seed-2-2-8-3`,
      name: 'to_standard_name', type: 'String',
      required: false, description: '',
      sortOrder: 3, entityId: ent_2_2_8.id,
    },
  });
  const ent_2_2_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_2.id, name: `Market` } },
    update: {},
    create: {
      name: `Market`,
      description: `Represents a defined market — the intersection of a product category scope and a geographic scope. Referenced by Competitor and Market Share. Used to bound commercial analysis and planning.`,
      subModelId: sub_2_2.id,
      relationships: [{"name":"defined by geo","target":"Market Geo-Region","cardinality":"M:1","type":"Association","description":"A Market has a geographic scope"},{"name":"defined by category","target":"Market Product Category","cardinality":"M:1","type":"Association","description":"A Market has a product category scope"},{"name":"targets segment","target":"Consumer Segment","cardinality":"M:1","type":"Association","description":"A Market targets a Consumer Segment"}],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-9-0` },
    update: {},
    create: {
      id: `seed-2-2-9-0`,
      name: 'market_id', type: 'UUID',
      required: true, description: 'Unique identifier for the market',
      sortOrder: 0, entityId: ent_2_2_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-9-1` },
    update: {},
    create: {
      id: `seed-2-2-9-1`,
      name: 'market_name', type: 'String',
      required: true, description: 'Name of the market',
      sortOrder: 1, entityId: ent_2_2_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-9-2` },
    update: {},
    create: {
      id: `seed-2-2-9-2`,
      name: 'market_type', type: 'Enum(Global|Regional|National|Local)',
      required: false, description: 'Geographic scope type of the market',
      sortOrder: 2, entityId: ent_2_2_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-9-3` },
    update: {},
    create: {
      id: `seed-2-2-9-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the market',
      sortOrder: 3, entityId: ent_2_2_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-2-9-4` },
    update: {},
    create: {
      id: `seed-2-2-9-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this market is active',
      sortOrder: 4, entityId: ent_2_2_9.id,
    },
  });
  const sub_2_3 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_2.id, name: 'General' } },
    update: {},
    create: { name: 'General', modelId: model_2.id, sortOrder: 3 },
  });
  const ent_2_3_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_3.id, name: `Market Organization` } },
    update: {},
    create: {
      name: `Market Organization`,
      description: `=VLOOKUP(D148, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_3.id,
      relationships: [{"name":"has parent","target":"Market Organization","cardinality":"M:1","type":"Self-Reference","description":"Market Organisations form a corporate hierarchy"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-0-0` },
    update: {},
    create: {
      id: `seed-2-3-0-0`,
      name: 'market_org_id', type: 'String',
      required: true, description: 'Unique identifier for the market-facing organisation',
      sortOrder: 0, entityId: ent_2_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-0-1` },
    update: {},
    create: {
      id: `seed-2-3-0-1`,
      name: 'org_name', type: 'String',
      required: true, description: 'Name of the organisation',
      sortOrder: 1, entityId: ent_2_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-0-2` },
    update: {},
    create: {
      id: `seed-2-3-0-2`,
      name: 'org_type', type: 'Enum(OEM|Retailer|Distributor|eCommerce|3PL|Brand)',
      required: true, description: 'Type of market organisation',
      sortOrder: 2, entityId: ent_2_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-0-3` },
    update: {},
    create: {
      id: `seed-2-3-0-3`,
      name: 'parent_market_org_id', type: 'String',
      required: false, description: 'Parent organisation for corporate hierarchy',
      sortOrder: 3, entityId: ent_2_3_0.id,
    },
  });
  const ent_2_3_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_3.id, name: `Market Share` } },
    update: {},
    create: {
      name: `Market Share`,
      description: `=VLOOKUP(D149, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_3.id,
      relationships: [{"name":"reported for","target":"Market","cardinality":"M:1","type":"Association","description":"Market Share is reported for a Market"},{"name":"reported for org","target":"Market Organization","cardinality":"M:1","type":"Association","description":"Market Share is reported for a Market Organisation"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-0` },
    update: {},
    create: {
      id: `seed-2-3-1-0`,
      name: 'market_share_id', type: 'String',
      required: true, description: 'Unique identifier for the market share record',
      sortOrder: 0, entityId: ent_2_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-1` },
    update: {},
    create: {
      id: `seed-2-3-1-1`,
      name: 'market_id', type: 'String',
      required: true, description: 'Market for which share is reported',
      sortOrder: 1, entityId: ent_2_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-2` },
    update: {},
    create: {
      id: `seed-2-3-1-2`,
      name: 'market_org_id', type: 'String',
      required: true, description: 'Organisation whose share is reported',
      sortOrder: 2, entityId: ent_2_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-3` },
    update: {},
    create: {
      id: `seed-2-3-1-3`,
      name: 'period', type: 'String',
      required: true, description: 'Reporting period (e.g. Q1-2025)',
      sortOrder: 3, entityId: ent_2_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-4` },
    update: {},
    create: {
      id: `seed-2-3-1-4`,
      name: 'share_pct', type: 'Decimal',
      required: false, description: 'Market share as a percentage of total market',
      sortOrder: 4, entityId: ent_2_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-1-5` },
    update: {},
    create: {
      id: `seed-2-3-1-5`,
      name: 'volume', type: 'Decimal',
      required: false, description: 'Absolute sales volume in the market in the period',
      sortOrder: 5, entityId: ent_2_3_1.id,
    },
  });
  const ent_2_3_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_3.id, name: `Person` } },
    update: {},
    create: {
      name: `Person`,
      description: `=VLOOKUP(D150, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_3.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-0` },
    update: {},
    create: {
      id: `seed-2-3-2-0`,
      name: 'person_id', type: 'String',
      required: true, description: 'Unique identifier for the person',
      sortOrder: 0, entityId: ent_2_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-1` },
    update: {},
    create: {
      id: `seed-2-3-2-1`,
      name: 'first_name', type: 'String',
      required: true, description: 'First name of the person',
      sortOrder: 1, entityId: ent_2_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-2` },
    update: {},
    create: {
      id: `seed-2-3-2-2`,
      name: 'last_name', type: 'String',
      required: true, description: 'Last name/surname of the person',
      sortOrder: 2, entityId: ent_2_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-3` },
    update: {},
    create: {
      id: `seed-2-3-2-3`,
      name: 'email', type: 'String',
      required: false, description: 'Primary email address',
      sortOrder: 3, entityId: ent_2_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-4` },
    update: {},
    create: {
      id: `seed-2-3-2-4`,
      name: 'phone', type: 'String',
      required: false, description: 'Primary phone number',
      sortOrder: 4, entityId: ent_2_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-2-5` },
    update: {},
    create: {
      id: `seed-2-3-2-5`,
      name: 'date_of_birth', type: 'Date',
      required: false, description: 'Date of birth',
      sortOrder: 5, entityId: ent_2_3_2.id,
    },
  });
  const ent_2_3_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_2_3.id, name: `Value Chain Role` } },
    update: {},
    create: {
      name: `Value Chain Role`,
      description: `=VLOOKUP(D151, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_2_3.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-3-0` },
    update: {},
    create: {
      id: `seed-2-3-3-0`,
      name: 'value_chain_role_id', type: 'String',
      required: true, description: 'Unique identifier for the value chain role',
      sortOrder: 0, entityId: ent_2_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-3-1` },
    update: {},
    create: {
      id: `seed-2-3-3-1`,
      name: 'value_chain_role_code', type: 'String',
      required: true, description: 'Code in the appropriate standard - e.g. Sector code 31-33 in NAICS',
      sortOrder: 1, entityId: ent_2_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-3-2` },
    update: {},
    create: {
      id: `seed-2-3-3-2`,
      name: 'standard_level', type: 'String',
      required: true, description: 'The specific level in the source standard\'s code hierarchy (e.g. Sector, if NAICS). Only a single level in a chosen standard is selected',
      sortOrder: 2, entityId: ent_2_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-3-3` },
    update: {},
    create: {
      id: `seed-2-3-3-3`,
      name: 'source_standard', type: 'String',
      required: true, description: 'e.g. NAICS',
      sortOrder: 3, entityId: ent_2_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-2-3-3-4` },
    update: {},
    create: {
      id: `seed-2-3-3-4`,
      name: 'value_chain_role_name', type: 'String',
      required: false, description: 'Descriptive name (description or definition) in the standard - e.g. Manufacturing (for 31-33)',
      sortOrder: 4, entityId: ent_2_3_3.id,
    },
  });
  const model_3 = await prisma.ontologyModel.upsert({
    where: { name: 'Operating Model' },
    update: {},
    create: { name: 'Operating Model', color: '#F59E0B', sortOrder: 3 },
  });
  const sub_3_0 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_3.id, name: 'Organization Model' } },
    update: {},
    create: { name: 'Organization Model', modelId: model_3.id, sortOrder: 0 },
  });
  const ent_3_0_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Organization Unit` } },
    update: {},
    create: {
      name: `Organization Unit`,
      description: `=VLOOKUP(D152, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [{"name":"has legal detail","target":"Legal Entity Detail","cardinality":"1:1","type":"Composition","description":"An Organization Unit of type LegalEntity has a Legal Entity Detail extension"},{"name":"has financial detail","target":"Financial Unit Detail","cardinality":"1:1","type":"Composition","description":"An Organization Unit functioning as a financial unit has a Financial Unit Detail extension"},{"name":"placed in hierarchy","target":"Organization Hierarchy Membership","cardinality":"1:M","type":"Association","description":"An Organization Unit can be placed in multiple hierarchies via membership records"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-0` },
    update: {},
    create: {
      id: `seed-3-0-0-0`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'Globally unique identifier for the organizational unit',
      sortOrder: 0, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-1` },
    update: {},
    create: {
      id: `seed-3-0-0-1`,
      name: 'org_unit_code', type: 'String',
      required: true, description: 'Short business code (e.g. PEPSICO_INC, FLNA, GBS_CAIRO)',
      sortOrder: 1, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-2` },
    update: {},
    create: {
      id: `seed-3-0-0-2`,
      name: 'org_unit_name', type: 'String',
      required: true, description: 'Full name of the organizational unit',
      sortOrder: 2, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-3` },
    update: {},
    create: {
      id: `seed-3-0-0-3`,
      name: 'unit_type', type: 'Enum(HoldingCompany|LegalEntity|BusinessSegment|OperatingDivision|ProfitCenter|CostCenter|FunctionalDepartment|SharedServiceCenter|JointVenture|BranchOffice|FranchiseUnit|GroupAffiliation)',
      required: true, description: 'Primary classification of the organizational unit',
      sortOrder: 3, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-4` },
    update: {},
    create: {
      id: `seed-3-0-0-4`,
      name: 'unit_subtype', type: 'String',
      required: false, description: 'Further classification within unit_type (e.g. ManufacturingPlant, DistributionCenter, R&DLab for CostCenter)',
      sortOrder: 4, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-5` },
    update: {},
    create: {
      id: `seed-3-0-0-5`,
      name: 'description', type: 'String',
      required: false, description: 'Narrative description of the unit\'s purpose and scope',
      sortOrder: 5, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-6` },
    update: {},
    create: {
      id: `seed-3-0-0-6`,
      name: 'status', type: 'Enum(Active|Inactive|Dissolved|Merged|Divested)',
      required: true, description: 'Current lifecycle status',
      sortOrder: 6, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-7` },
    update: {},
    create: {
      id: `seed-3-0-0-7`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date the unit became active in this form',
      sortOrder: 7, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-8` },
    update: {},
    create: {
      id: `seed-3-0-0-8`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date the unit was dissolved, merged, or divested (null if active)',
      sortOrder: 8, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-9` },
    update: {},
    create: {
      id: `seed-3-0-0-9`,
      name: 'primary_country_code', type: 'String',
      required: false, description: 'ISO-3166 country code of primary location or incorporation',
      sortOrder: 9, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-10` },
    update: {},
    create: {
      id: `seed-3-0-0-10`,
      name: 'primary_currency', type: 'String',
      required: false, description: 'ISO-4217 currency code for primary reporting currency',
      sortOrder: 10, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-11` },
    update: {},
    create: {
      id: `seed-3-0-0-11`,
      name: 'employee_count', type: 'Integer',
      required: false, description: 'Approximate headcount (for sizing)',
      sortOrder: 11, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-12` },
    update: {},
    create: {
      id: `seed-3-0-0-12`,
      name: 'annual_revenue', type: 'Decimal',
      required: false, description: 'Annual revenue in primary_currency (for segments/divisions with P&L)',
      sortOrder: 12, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-13` },
    update: {},
    create: {
      id: `seed-3-0-0-13`,
      name: 'is_consolidated', type: 'Boolean',
      required: false, description: 'Whether this unit is fully consolidated in group financial statements',
      sortOrder: 13, entityId: ent_3_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-0-14` },
    update: {},
    create: {
      id: `seed-3-0-0-14`,
      name: 'erp_company_code', type: 'String',
      required: false, description: 'ERP system company code (e.g. SAP company code) if applicable',
      sortOrder: 14, entityId: ent_3_0_0.id,
    },
  });
  const ent_3_0_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Organization Hierarchy` } },
    update: {},
    create: {
      name: `Organization Hierarchy`,
      description: `=VLOOKUP(D153, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [{"name":"contains memberships","target":"Organization Hierarchy Membership","cardinality":"1:M","type":"Composition","description":"A hierarchy defines its structure through membership records"},{"name":"rooted at","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"A hierarchy has a root Organization Unit"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-0` },
    update: {},
    create: {
      id: `seed-3-0-1-0`,
      name: 'org_hierarchy_id', type: 'String',
      required: true, description: 'Globally unique identifier for the hierarchy',
      sortOrder: 0, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-1` },
    update: {},
    create: {
      id: `seed-3-0-1-1`,
      name: 'hierarchy_code', type: 'String',
      required: true, description: 'Short code (e.g. LEGAL, OPERATIONAL, GEO, FIN_REPORTING, FUNCTIONAL)',
      sortOrder: 1, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-2` },
    update: {},
    create: {
      id: `seed-3-0-1-2`,
      name: 'hierarchy_name', type: 'String',
      required: true, description: 'Full name of the hierarchy (e.g. PepsiCo Legal Entity Structure)',
      sortOrder: 2, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-3` },
    update: {},
    create: {
      id: `seed-3-0-1-3`,
      name: 'hierarchy_type', type: 'Enum(Legal|Operational|Geographic|FinancialReporting|Functional|GroupAffiliation|Custom)',
      required: true, description: 'Type of organizational hierarchy',
      sortOrder: 3, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-4` },
    update: {},
    create: {
      id: `seed-3-0-1-4`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the hierarchy\'s purpose and scope',
      sortOrder: 4, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-5` },
    update: {},
    create: {
      id: `seed-3-0-1-5`,
      name: 'root_org_unit_id', type: 'String',
      required: true, description: 'FK to the root Organization Unit at the top of this hierarchy',
      sortOrder: 5, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-6` },
    update: {},
    create: {
      id: `seed-3-0-1-6`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this hierarchy version became active',
      sortOrder: 6, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-7` },
    update: {},
    create: {
      id: `seed-3-0-1-7`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this hierarchy version was superseded (null if current)',
      sortOrder: 7, entityId: ent_3_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-1-8` },
    update: {},
    create: {
      id: `seed-3-0-1-8`,
      name: 'version', type: 'String',
      required: false, description: 'Version identifier for tracking reorganizations',
      sortOrder: 8, entityId: ent_3_0_1.id,
    },
  });
  const ent_3_0_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Organization Hierarchy Membership` } },
    update: {},
    create: {
      name: `Organization Hierarchy Membership`,
      description: `=VLOOKUP(D154, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [{"name":"for unit","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Each membership record places one Organization Unit in a hierarchy"},{"name":"parent unit","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"Each membership record points to a parent Organization Unit in the hierarchy"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-0` },
    update: {},
    create: {
      id: `seed-3-0-2-0`,
      name: 'membership_id', type: 'String',
      required: true, description: 'Globally unique identifier for this membership record',
      sortOrder: 0, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-1` },
    update: {},
    create: {
      id: `seed-3-0-2-1`,
      name: 'org_hierarchy_id', type: 'String',
      required: true, description: 'FK to Organization Hierarchy',
      sortOrder: 1, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-2` },
    update: {},
    create: {
      id: `seed-3-0-2-2`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to the Organization Unit being placed in the hierarchy',
      sortOrder: 2, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-3` },
    update: {},
    create: {
      id: `seed-3-0-2-3`,
      name: 'parent_org_unit_id', type: 'String',
      required: false, description: 'FK to the parent Organization Unit in this hierarchy (null for root)',
      sortOrder: 3, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-4` },
    update: {},
    create: {
      id: `seed-3-0-2-4`,
      name: 'level_depth', type: 'Integer',
      required: true, description: 'Depth in the hierarchy (1 = root)',
      sortOrder: 4, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-5` },
    update: {},
    create: {
      id: `seed-3-0-2-5`,
      name: 'level_name', type: 'String',
      required: false, description: 'Name of this level (e.g. Group, Segment, Division, Department)',
      sortOrder: 5, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-6` },
    update: {},
    create: {
      id: `seed-3-0-2-6`,
      name: 'sort_order', type: 'Integer',
      required: false, description: 'Display/reporting sort order among siblings',
      sortOrder: 6, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-7` },
    update: {},
    create: {
      id: `seed-3-0-2-7`,
      name: 'effective_date', type: 'Date',
      required: false, description: 'Date this placement became active',
      sortOrder: 7, entityId: ent_3_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-2-8` },
    update: {},
    create: {
      id: `seed-3-0-2-8`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date this placement ended (null if current)',
      sortOrder: 8, entityId: ent_3_0_2.id,
    },
  });
  const ent_3_0_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Organization Geo Presence` } },
    update: {},
    create: {
      name: `Organization Geo Presence`,
      description: `=VLOOKUP(D155, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [{"name":"for unit","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"An Organization Unit has geographic presence records"},{"name":"in region","target":"Market Geo-Region","cardinality":"M:1","type":"Association","description":"Geographic presence is in a Market Geo-Region"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-0` },
    update: {},
    create: {
      id: `seed-3-0-3-0`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to Organization Unit',
      sortOrder: 0, entityId: ent_3_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-1` },
    update: {},
    create: {
      id: `seed-3-0-3-1`,
      name: 'geo_region_id', type: 'String',
      required: true, description: 'FK to Market Geo-Region',
      sortOrder: 1, entityId: ent_3_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-2` },
    update: {},
    create: {
      id: `seed-3-0-3-2`,
      name: 'presence_type', type: 'Enum(Headquarters|Manufacturing|Distribution|Sales|R&D|SharedServices|FranchiseTerritory)',
      required: true, description: 'Nature of the organization\'s presence in this geo-region',
      sortOrder: 2, entityId: ent_3_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-3` },
    update: {},
    create: {
      id: `seed-3-0-3-3`,
      name: 'is_primary', type: 'Boolean',
      required: false, description: 'Whether this is the primary/headquarters location',
      sortOrder: 3, entityId: ent_3_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-4` },
    update: {},
    create: {
      id: `seed-3-0-3-4`,
      name: 'effective_date', type: 'Date',
      required: false, description: 'Date presence was established',
      sortOrder: 4, entityId: ent_3_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-3-5` },
    update: {},
    create: {
      id: `seed-3-0-3-5`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Date presence ended (null if current)',
      sortOrder: 5, entityId: ent_3_0_3.id,
    },
  });
  const ent_3_0_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Financial Unit Detail` } },
    update: {},
    create: {
      name: `Financial Unit Detail`,
      description: `=VLOOKUP(D156, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-0` },
    update: {},
    create: {
      id: `seed-3-0-4-0`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to Organization Unit (1:1)',
      sortOrder: 0, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-1` },
    update: {},
    create: {
      id: `seed-3-0-4-1`,
      name: 'financial_unit_type', type: 'Enum(ProfitCenter|CostCenter|InvestmentCenter|RevenueCenter)',
      required: true, description: 'Type of financial accountability',
      sortOrder: 1, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-2` },
    update: {},
    create: {
      id: `seed-3-0-4-2`,
      name: 'controlling_area', type: 'String',
      required: false, description: 'ERP controlling area code (e.g. SAP CO area)',
      sortOrder: 2, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-3` },
    update: {},
    create: {
      id: `seed-3-0-4-3`,
      name: 'reporting_currency', type: 'String',
      required: true, description: 'ISO-4217 currency for financial reporting',
      sortOrder: 3, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-4` },
    update: {},
    create: {
      id: `seed-3-0-4-4`,
      name: 'gl_account_range_start', type: 'String',
      required: false, description: 'Start of GL account range assigned to this unit',
      sortOrder: 4, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-5` },
    update: {},
    create: {
      id: `seed-3-0-4-5`,
      name: 'gl_account_range_end', type: 'String',
      required: false, description: 'End of GL account range assigned to this unit',
      sortOrder: 5, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-6` },
    update: {},
    create: {
      id: `seed-3-0-4-6`,
      name: 'cost_allocation_method', type: 'Enum(Direct|StepDown|Reciprocal|ActivityBased)',
      required: false, description: 'Method used to allocate costs from/to this unit',
      sortOrder: 6, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-7` },
    update: {},
    create: {
      id: `seed-3-0-4-7`,
      name: 'budget_owner', type: 'String',
      required: false, description: 'Name or role of the person accountable for this financial unit\'s budget',
      sortOrder: 7, entityId: ent_3_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-4-8` },
    update: {},
    create: {
      id: `seed-3-0-4-8`,
      name: 'reporting_calendar', type: 'String',
      required: false, description: 'Reporting calendar (e.g. 4-4-5, Calendar Month, Fiscal Period)',
      sortOrder: 8, entityId: ent_3_0_4.id,
    },
  });
  const ent_3_0_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Legal Entity Detail` } },
    update: {},
    create: {
      name: `Legal Entity Detail`,
      description: `=VLOOKUP(D157, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-0` },
    update: {},
    create: {
      id: `seed-3-0-5-0`,
      name: 'org_unit_id', type: 'String',
      required: true, description: 'FK to Organization Unit (1:1, must be unit_type = LegalEntity)',
      sortOrder: 0, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-1` },
    update: {},
    create: {
      id: `seed-3-0-5-1`,
      name: 'jurisdiction_country', type: 'String',
      required: true, description: 'ISO-3166 country of legal incorporation/registration',
      sortOrder: 1, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-2` },
    update: {},
    create: {
      id: `seed-3-0-5-2`,
      name: 'jurisdiction_state', type: 'String',
      required: false, description: 'State/province of incorporation (e.g. North Carolina, Delaware)',
      sortOrder: 2, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-3` },
    update: {},
    create: {
      id: `seed-3-0-5-3`,
      name: 'legal_form', type: 'Enum(Corporation|LLC|LLP|Ltd|GmbH|SA|SAS|BV|NV|KK|AG|Pty|AB|Other)',
      required: true, description: 'Legal form of the entity',
      sortOrder: 3, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-4` },
    update: {},
    create: {
      id: `seed-3-0-5-4`,
      name: 'registration_number', type: 'String',
      required: false, description: 'Company registration/incorporation number',
      sortOrder: 4, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-5` },
    update: {},
    create: {
      id: `seed-3-0-5-5`,
      name: 'tax_id', type: 'String',
      required: false, description: 'Tax identification number (EIN, VAT number, etc.)',
      sortOrder: 5, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-6` },
    update: {},
    create: {
      id: `seed-3-0-5-6`,
      name: 'registered_capital', type: 'Decimal',
      required: false, description: 'Registered/authorized capital in local currency',
      sortOrder: 6, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-7` },
    update: {},
    create: {
      id: `seed-3-0-5-7`,
      name: 'registered_capital_currency', type: 'String',
      required: false, description: 'ISO-4217 currency code for registered capital',
      sortOrder: 7, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-8` },
    update: {},
    create: {
      id: `seed-3-0-5-8`,
      name: 'incorporation_date', type: 'Date',
      required: false, description: 'Date of incorporation',
      sortOrder: 8, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-9` },
    update: {},
    create: {
      id: `seed-3-0-5-9`,
      name: 'fiscal_year_end', type: 'String',
      required: false, description: 'Fiscal year end (e.g. December, Last Saturday of December for PepsiCo)',
      sortOrder: 9, entityId: ent_3_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-5-10` },
    update: {},
    create: {
      id: `seed-3-0-5-10`,
      name: 'regulatory_status', type: 'Enum(Active|Dormant|InLiquidation|StruckOff)',
      required: true, description: 'Current regulatory/filing status',
      sortOrder: 10, entityId: ent_3_0_5.id,
    },
  });
  const ent_3_0_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_0.id, name: `Ownership Stake` } },
    update: {},
    create: {
      name: `Ownership Stake`,
      description: `=VLOOKUP(D158, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_0.id,
      relationships: [{"name":"owner","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"The owning Organization Unit in the equity relationship"},{"name":"owned entity","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"The owned Organization Unit in the equity relationship"}],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-0` },
    update: {},
    create: {
      id: `seed-3-0-6-0`,
      name: 'ownership_stake_id', type: 'String',
      required: true, description: 'Globally unique identifier for the ownership record',
      sortOrder: 0, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-1` },
    update: {},
    create: {
      id: `seed-3-0-6-1`,
      name: 'owner_org_unit_id', type: 'String',
      required: true, description: 'FK to the owning Organization Unit',
      sortOrder: 1, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-2` },
    update: {},
    create: {
      id: `seed-3-0-6-2`,
      name: 'owned_org_unit_id', type: 'String',
      required: true, description: 'FK to the owned Organization Unit',
      sortOrder: 2, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-3` },
    update: {},
    create: {
      id: `seed-3-0-6-3`,
      name: 'ownership_pct', type: 'Decimal',
      required: true, description: 'Equity ownership percentage (0.0-100.0)',
      sortOrder: 3, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-4` },
    update: {},
    create: {
      id: `seed-3-0-6-4`,
      name: 'voting_rights_pct', type: 'Decimal',
      required: false, description: 'Voting rights percentage if different from ownership (e.g. dual-class shares)',
      sortOrder: 4, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-5` },
    update: {},
    create: {
      id: `seed-3-0-6-5`,
      name: 'stake_type', type: 'Enum(Subsidiary|Associate|JointVenture|MinorityInvestment|CrossHolding)',
      required: true, description: 'Nature of the ownership relationship',
      sortOrder: 5, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-6` },
    update: {},
    create: {
      id: `seed-3-0-6-6`,
      name: 'consolidation_method', type: 'Enum(FullConsolidation|EquityMethod|Proportional|NotConsolidated)',
      required: true, description: 'Financial reporting consolidation method',
      sortOrder: 6, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-7` },
    update: {},
    create: {
      id: `seed-3-0-6-7`,
      name: 'acquisition_date', type: 'Date',
      required: false, description: 'Date the stake was acquired',
      sortOrder: 7, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-8` },
    update: {},
    create: {
      id: `seed-3-0-6-8`,
      name: 'acquisition_value', type: 'Decimal',
      required: false, description: 'Value paid for the stake in USD',
      sortOrder: 8, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-9` },
    update: {},
    create: {
      id: `seed-3-0-6-9`,
      name: 'divestiture_date', type: 'Date',
      required: false, description: 'Date the stake was divested (null if still held)',
      sortOrder: 9, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-10` },
    update: {},
    create: {
      id: `seed-3-0-6-10`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date this ownership record became effective',
      sortOrder: 10, entityId: ent_3_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-0-6-11` },
    update: {},
    create: {
      id: `seed-3-0-6-11`,
      name: 'notes', type: 'String',
      required: false, description: 'Additional context (e.g. acquisition terms, JV structure)',
      sortOrder: 11, entityId: ent_3_0_6.id,
    },
  });
  const sub_3_1 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_3.id, name: 'People Model' } },
    update: {},
    create: { name: 'People Model', modelId: model_3.id, sortOrder: 1 },
  });
  const ent_3_1_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_1.id, name: `Employee` } },
    update: {},
    create: {
      name: `Employee`,
      description: `=VLOOKUP(D159, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_1.id,
      relationships: [{"name":"is a","target":"Person","cardinality":"M:1","type":"Association","description":"An Employee is a Person employed by the organisation"},{"name":"belongs to","target":"Organization Unit","cardinality":"M:1","type":"Association","description":"An Employee is assigned to an Organisational Unit"},{"name":"has band","target":"Job Role","cardinality":"M:1","type":"Association","description":"An Employee is graded at a Band level"},{"name":"has goal","target":"Performance Goal","cardinality":"1:M","type":"Composition","description":"An Employee has one or more performance Goals"},{"name":"has performance","target":"Employee Performance","cardinality":"1:M","type":"Composition","description":"An Employee has periodic Performance records"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-0` },
    update: {},
    create: {
      id: `seed-3-1-0-0`,
      name: 'employee_id', type: 'String',
      required: true, description: 'Unique identifier for the employee',
      sortOrder: 0, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-1` },
    update: {},
    create: {
      id: `seed-3-1-0-1`,
      name: 'person_id', type: 'String',
      required: true, description: 'FK to the Person entity',
      sortOrder: 1, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-2` },
    update: {},
    create: {
      id: `seed-3-1-0-2`,
      name: 'org_id', type: 'String',
      required: true, description: 'Organisational unit the employee belongs to',
      sortOrder: 2, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-3` },
    update: {},
    create: {
      id: `seed-3-1-0-3`,
      name: 'band_id', type: 'String',
      required: false, description: 'Job band/grade of the employee',
      sortOrder: 3, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-4` },
    update: {},
    create: {
      id: `seed-3-1-0-4`,
      name: 'job_title', type: 'String',
      required: false, description: 'Job title of the employee',
      sortOrder: 4, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-5` },
    update: {},
    create: {
      id: `seed-3-1-0-5`,
      name: 'hire_date', type: 'Date',
      required: true, description: 'Date the employee was hired',
      sortOrder: 5, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-6` },
    update: {},
    create: {
      id: `seed-3-1-0-6`,
      name: 'employment_type', type: 'Enum(FullTime|PartTime|Contract|Temporary)',
      required: true, description: 'Employment type classification',
      sortOrder: 6, entityId: ent_3_1_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-0-7` },
    update: {},
    create: {
      id: `seed-3-1-0-7`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the employee is currently active',
      sortOrder: 7, entityId: ent_3_1_0.id,
    },
  });
  const ent_3_1_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_1.id, name: `Employee Performance` } },
    update: {},
    create: {
      name: `Employee Performance`,
      description: `=VLOOKUP(D160, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_1.id,
      relationships: [],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-1-0` },
    update: {},
    create: {
      id: `seed-3-1-1-0`,
      name: 'performance_id', type: 'String',
      required: true, description: 'Unique identifier for the performance record',
      sortOrder: 0, entityId: ent_3_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-1-1` },
    update: {},
    create: {
      id: `seed-3-1-1-1`,
      name: 'employee_id', type: 'String',
      required: true, description: 'Employee being evaluated',
      sortOrder: 1, entityId: ent_3_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-1-2` },
    update: {},
    create: {
      id: `seed-3-1-1-2`,
      name: 'period', type: 'String',
      required: true, description: 'Evaluation period',
      sortOrder: 2, entityId: ent_3_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-1-3` },
    update: {},
    create: {
      id: `seed-3-1-1-3`,
      name: 'rating', type: 'Decimal',
      required: false, description: 'Numeric performance rating',
      sortOrder: 3, entityId: ent_3_1_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-1-4` },
    update: {},
    create: {
      id: `seed-3-1-1-4`,
      name: 'reviewer_id', type: 'String',
      required: false, description: 'Reviewer/manager who conducted the evaluation',
      sortOrder: 4, entityId: ent_3_1_1.id,
    },
  });
  const ent_3_1_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_1.id, name: `Job Role` } },
    update: {},
    create: {
      name: `Job Role`,
      description: `=VLOOKUP(D161, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_1.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-2-0` },
    update: {},
    create: {
      id: `seed-3-1-2-0`,
      name: 'band_id', type: 'String',
      required: true, description: 'Unique identifier for the band',
      sortOrder: 0, entityId: ent_3_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-2-1` },
    update: {},
    create: {
      id: `seed-3-1-2-1`,
      name: 'band_name', type: 'String',
      required: true, description: 'Name of the band (e.g. L3, Senior Manager)',
      sortOrder: 1, entityId: ent_3_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-2-2` },
    update: {},
    create: {
      id: `seed-3-1-2-2`,
      name: 'band_level', type: 'Integer',
      required: true, description: 'Numeric rank of the band (higher = more senior)',
      sortOrder: 2, entityId: ent_3_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-2-3` },
    update: {},
    create: {
      id: `seed-3-1-2-3`,
      name: 'min_salary', type: 'Decimal',
      required: false, description: 'Minimum salary for this band',
      sortOrder: 3, entityId: ent_3_1_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-2-4` },
    update: {},
    create: {
      id: `seed-3-1-2-4`,
      name: 'max_salary', type: 'Decimal',
      required: false, description: 'Maximum salary for this band',
      sortOrder: 4, entityId: ent_3_1_2.id,
    },
  });
  const ent_3_1_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_1.id, name: `Performance Goal` } },
    update: {},
    create: {
      name: `Performance Goal`,
      description: `=VLOOKUP(D162, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_1.id,
      relationships: [],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-0` },
    update: {},
    create: {
      id: `seed-3-1-3-0`,
      name: 'goal_id', type: 'String',
      required: true, description: 'Unique identifier for the goal',
      sortOrder: 0, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-1` },
    update: {},
    create: {
      id: `seed-3-1-3-1`,
      name: 'goal_name', type: 'String',
      required: true, description: 'Name/title of the goal',
      sortOrder: 1, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-2` },
    update: {},
    create: {
      id: `seed-3-1-3-2`,
      name: 'employee_id', type: 'String',
      required: true, description: 'Employee for whom the goal is set',
      sortOrder: 2, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-3` },
    update: {},
    create: {
      id: `seed-3-1-3-3`,
      name: 'period', type: 'String',
      required: true, description: 'Period the goal applies to (e.g. Q1-2025, FY2025)',
      sortOrder: 3, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-4` },
    update: {},
    create: {
      id: `seed-3-1-3-4`,
      name: 'description', type: 'String',
      required: false, description: 'Detailed description of the goal',
      sortOrder: 4, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-5` },
    update: {},
    create: {
      id: `seed-3-1-3-5`,
      name: 'target_value', type: 'Decimal',
      required: false, description: 'Quantitative target for the goal',
      sortOrder: 5, entityId: ent_3_1_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-3-6` },
    update: {},
    create: {
      id: `seed-3-1-3-6`,
      name: 'status', type: 'Enum(Draft|Active|Achieved|Missed|Cancelled)',
      required: true, description: 'Current status of the goal',
      sortOrder: 6, entityId: ent_3_1_3.id,
    },
  });
  const ent_3_1_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_1.id, name: `Skill` } },
    update: {},
    create: {
      name: `Skill`,
      description: `=VLOOKUP(D163, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_1.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-4-0` },
    update: {},
    create: {
      id: `seed-3-1-4-0`,
      name: 'skill_id', type: 'String',
      required: true, description: 'Unique identifier for the skill',
      sortOrder: 0, entityId: ent_3_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-4-1` },
    update: {},
    create: {
      id: `seed-3-1-4-1`,
      name: 'skill_name', type: 'String',
      required: true, description: 'Name of the skill',
      sortOrder: 1, entityId: ent_3_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-4-2` },
    update: {},
    create: {
      id: `seed-3-1-4-2`,
      name: 'skill_category', type: 'String',
      required: false, description: 'Grouping category (e.g. Technical, Analytical, Leadership)',
      sortOrder: 2, entityId: ent_3_1_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-1-4-3` },
    update: {},
    create: {
      id: `seed-3-1-4-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the skill and its application',
      sortOrder: 3, entityId: ent_3_1_4.id,
    },
  });
  const sub_3_2 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_3.id, name: 'Process Model' } },
    update: {},
    create: { name: 'Process Model', modelId: model_3.id, sortOrder: 2 },
  });
  const ent_3_2_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_2.id, name: `Process` } },
    update: {},
    create: {
      name: `Process`,
      description: `=VLOOKUP(D164, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_2.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-0-0` },
    update: {},
    create: {
      id: `seed-3-2-0-0`,
      name: 'process_id', type: 'String',
      required: true, description: 'Unique identifier for the process',
      sortOrder: 0, entityId: ent_3_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-0-1` },
    update: {},
    create: {
      id: `seed-3-2-0-1`,
      name: 'process_name', type: 'String',
      required: true, description: 'Name of the business process',
      sortOrder: 1, entityId: ent_3_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-0-2` },
    update: {},
    create: {
      id: `seed-3-2-0-2`,
      name: 'process_type', type: 'Enum(Planning|Execution|Review|Approval|Integration)',
      required: true, description: 'Type of business process',
      sortOrder: 2, entityId: ent_3_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-0-3` },
    update: {},
    create: {
      id: `seed-3-2-0-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the process objective and scope',
      sortOrder: 3, entityId: ent_3_2_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-0-4` },
    update: {},
    create: {
      id: `seed-3-2-0-4`,
      name: 'owner_id', type: 'String',
      required: false, description: 'Employee responsible for the process',
      sortOrder: 4, entityId: ent_3_2_0.id,
    },
  });
  const ent_3_2_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_2.id, name: `Process Calendar` } },
    update: {},
    create: {
      name: `Process Calendar`,
      description: `=VLOOKUP(D165, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_2.id,
      relationships: [{"name":"schedules","target":"Process","cardinality":"M:1","type":"Association","description":"Process Calendar defines when a Process runs"},{"name":"using calendar","target":"Calendar","cardinality":"M:1","type":"Association","description":"Process Calendar references a working Calendar"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-1-0` },
    update: {},
    create: {
      id: `seed-3-2-1-0`,
      name: 'process_calendar_id', type: 'String',
      required: true, description: 'Unique identifier for the process calendar mapping',
      sortOrder: 0, entityId: ent_3_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-1-1` },
    update: {},
    create: {
      id: `seed-3-2-1-1`,
      name: 'process_id', type: 'String',
      required: true, description: 'Process being scheduled',
      sortOrder: 1, entityId: ent_3_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-1-2` },
    update: {},
    create: {
      id: `seed-3-2-1-2`,
      name: 'calendar_id', type: 'String',
      required: true, description: 'Calendar defining working days',
      sortOrder: 2, entityId: ent_3_2_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-1-3` },
    update: {},
    create: {
      id: `seed-3-2-1-3`,
      name: 'frequency', type: 'String',
      required: true, description: 'Execution frequency (Weekly, Monthly, Quarterly)',
      sortOrder: 3, entityId: ent_3_2_1.id,
    },
  });
  const ent_3_2_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_2.id, name: `Process Step` } },
    update: {},
    create: {
      name: `Process Step`,
      description: `=VLOOKUP(D166, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_2.id,
      relationships: [{"name":"part of","target":"Process","cardinality":"M:1","type":"Association","description":"A Process Step is a step within a Process"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-0` },
    update: {},
    create: {
      id: `seed-3-2-2-0`,
      name: 'step_id', type: 'String',
      required: true, description: 'Unique identifier for the process step',
      sortOrder: 0, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-1` },
    update: {},
    create: {
      id: `seed-3-2-2-1`,
      name: 'process_id', type: 'String',
      required: true, description: 'Process to which this step belongs',
      sortOrder: 1, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-2` },
    update: {},
    create: {
      id: `seed-3-2-2-2`,
      name: 'step_name', type: 'String',
      required: true, description: 'Name of the process step',
      sortOrder: 2, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-3` },
    update: {},
    create: {
      id: `seed-3-2-2-3`,
      name: 'step_order', type: 'Integer',
      required: true, description: 'Order of the step within the process',
      sortOrder: 3, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-4` },
    update: {},
    create: {
      id: `seed-3-2-2-4`,
      name: 'responsible_role_id', type: 'String',
      required: false, description: 'Role responsible for executing this step',
      sortOrder: 4, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-5` },
    update: {},
    create: {
      id: `seed-3-2-2-5`,
      name: 'duration', type: 'Decimal',
      required: false, description: 'Expected duration of the step',
      sortOrder: 5, entityId: ent_3_2_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-2-2-6` },
    update: {},
    create: {
      id: `seed-3-2-2-6`,
      name: 'duration_uom', type: 'String',
      required: false, description: 'Unit of measure for duration (Hours, Days)',
      sortOrder: 6, entityId: ent_3_2_2.id,
    },
  });
  const sub_3_3 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_3.id, name: 'Technology' } },
    update: {},
    create: { name: 'Technology', modelId: model_3.id, sortOrder: 3 },
  });
  const ent_3_3_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `API` } },
    update: {},
    create: {
      name: `API`,
      description: `=VLOOKUP(D167, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Application Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is exposed by","target":"Software Application","cardinality":"M:1","type":"Association","description":"An API is exposed by a Software Application"}],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-0` },
    update: {},
    create: {
      id: `seed-3-3-0-0`,
      name: 'api_id', type: 'String',
      required: true, description: 'Unique system identifier for the API',
      sortOrder: 0, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-1` },
    update: {},
    create: {
      id: `seed-3-3-0-1`,
      name: 'api_name', type: 'String',
      required: true, description: 'Descriptive name of the API (e.g., Customer Data API, Order Management API)',
      sortOrder: 1, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-2` },
    update: {},
    create: {
      id: `seed-3-3-0-2`,
      name: 'api_version', type: 'String',
      required: true, description: 'Version string of the API (e.g., v1, v2.3)',
      sortOrder: 2, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-3` },
    update: {},
    create: {
      id: `seed-3-3-0-3`,
      name: 'owner_application_id', type: 'String',
      required: true, description: 'FK: Software Application that owns and exposes this API',
      sortOrder: 3, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-4` },
    update: {},
    create: {
      id: `seed-3-3-0-4`,
      name: 'protocol', type: 'Enum(REST|GraphQL|SOAP|gRPC|WebSocket|Event/Async|Other)',
      required: true, description: 'Communication protocol used by the API',
      sortOrder: 4, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-5` },
    update: {},
    create: {
      id: `seed-3-3-0-5`,
      name: 'authentication_type', type: 'Enum(OAuth2|API Key|JWT|Basic Auth|SAML|mTLS|None)',
      required: true, description: 'Authentication mechanism required by consumers',
      sortOrder: 5, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-6` },
    update: {},
    create: {
      id: `seed-3-3-0-6`,
      name: 'visibility', type: 'Enum(Internal|Partner|Public)',
      required: true, description: 'Intended audience for the API',
      sortOrder: 6, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-7` },
    update: {},
    create: {
      id: `seed-3-3-0-7`,
      name: 'base_url', type: 'String',
      required: false, description: 'Base endpoint URL for the API',
      sortOrder: 7, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-8` },
    update: {},
    create: {
      id: `seed-3-3-0-8`,
      name: 'documentation_url', type: 'String',
      required: false, description: 'URL to API documentation or developer portal',
      sortOrder: 8, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-9` },
    update: {},
    create: {
      id: `seed-3-3-0-9`,
      name: 'rate_limit', type: 'String',
      required: false, description: 'Rate limiting constraint (e.g., 1000 req/min per key)',
      sortOrder: 9, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-10` },
    update: {},
    create: {
      id: `seed-3-3-0-10`,
      name: 'status', type: 'Enum(Active|Deprecated|Beta|Retired)',
      required: true, description: 'Current availability status of the API',
      sortOrder: 10, entityId: ent_3_3_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-0-11` },
    update: {},
    create: {
      id: `seed-3-3-0-11`,
      name: 'sla_response_ms', type: 'Integer',
      required: false, description: 'SLA target for API response time in milliseconds',
      sortOrder: 11, entityId: ent_3_3_0.id,
    },
  });
  const ent_3_3_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Application Instance` } },
    update: {},
    create: {
      name: `Application Instance`,
      description: `=VLOOKUP(D168, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Application Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"runs on","target":"Virtual Machine","cardinality":"M:M","type":"Association","description":"An application instance is deployed to one or more VMs (or containers); a VM may host multiple application instances"},{"name":"runs on","target":"Cloud Resource","cardinality":"M:M","type":"Association","description":"SaaS or PaaS-hosted application instances run on Cloud Resources managed by the provider"},{"name":"consumes","target":"Platform Service","cardinality":"M:M","type":"Association","description":"Application instances depend on shared platform services (API gateway, message broker, identity provider, etc.)"},{"name":"uses","target":"Database","cardinality":"M:M","type":"Association","description":"Application instances read from and write to one or more databases"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-0` },
    update: {},
    create: {
      id: `seed-3-3-1-0`,
      name: 'application_instance_id', type: 'String',
      required: true, description: 'Unique system identifier for the application instance',
      sortOrder: 0, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-1` },
    update: {},
    create: {
      id: `seed-3-3-1-1`,
      name: 'instance_name', type: 'String',
      required: true, description: 'Descriptive name of this instance (e.g., SAP-S4-PROD, SFDC-SANDBOX)',
      sortOrder: 1, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-2` },
    update: {},
    create: {
      id: `seed-3-3-1-2`,
      name: 'application_id', type: 'String',
      required: true, description: 'FK: Software Application this instance belongs to',
      sortOrder: 2, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-3` },
    update: {},
    create: {
      id: `seed-3-3-1-3`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Environment in which this application instance is deployed.',
      sortOrder: 3, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-4` },
    update: {},
    create: {
      id: `seed-3-3-1-4`,
      name: 'base_url', type: 'String',
      required: false, description: 'Base URL or hostname for accessing the instance',
      sortOrder: 4, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-5` },
    update: {},
    create: {
      id: `seed-3-3-1-5`,
      name: 'version', type: 'String',
      required: false, description: 'Software version currently running in this instance',
      sortOrder: 5, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-6` },
    update: {},
    create: {
      id: `seed-3-3-1-6`,
      name: 'hosting_type', type: 'Enum(Cloud|On-Premise|Managed Service|Hybrid)',
      required: true, description: 'Where and how this instance is hosted',
      sortOrder: 6, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-7` },
    update: {},
    create: {
      id: `seed-3-3-1-7`,
      name: 'instance_status', type: 'Enum(Active|Inactive|Under Maintenance|Decommissioned)',
      required: true, description: 'Current availability state',
      sortOrder: 7, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-8` },
    update: {},
    create: {
      id: `seed-3-3-1-8`,
      name: 'sla_uptime_pct', type: 'Decimal',
      required: false, description: 'Agreed uptime SLA percentage (e.g., 99.9)',
      sortOrder: 8, entityId: ent_3_3_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-1-9` },
    update: {},
    create: {
      id: `seed-3-3-1-9`,
      name: 'primary_region', type: 'String',
      required: false, description: 'Primary cloud region or data center where the instance runs',
      sortOrder: 9, entityId: ent_3_3_1.id,
    },
  });
  const ent_3_3_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Software Application` } },
    update: {},
    create: {
      name: `Software Application`,
      description: `=VLOOKUP(D169, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Application Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is deployed as","target":"Application Instance","cardinality":"1:M","type":"Composition","description":"A Software Application can have multiple instances across environments (prod, staging, dev)"},{"name":"has released","target":"Software Version","cardinality":"1:M","type":"Composition","description":"The version history of an application is composed of its individual Software Version records"},{"name":"exposes","target":"API","cardinality":"1:M","type":"Composition","description":"A Software Application owns and exposes one or more APIs for integration"},{"name":"depends on","target":"Software Application","cardinality":"M:M","type":"Self-Reference","description":"Applications have upstream/downstream dependencies; capturing this enables impact analysis and change control"},{"name":"enables","target":"Technology Capability","cardinality":"M:M","type":"Association","description":"One or more applications together may deliver a named Technology Capability to the business"},{"name":"is governed by","target":"IT Service","cardinality":"M:1","type":"Association","description":"A Software Application is the primary system underpinning a defined IT Service"},{"name":"conforms to","target":"Technology Standard","cardinality":"M:M","type":"Association","description":"Applications must comply with approved Technology Standards (e.g., API design, security, data handling)"},{"name":"owns","target":"Data Asset","cardinality":"1:M","type":"Composition","description":"A Software Application is the system of record for one or more Data Assets"}],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-0` },
    update: {},
    create: {
      id: `seed-3-3-2-0`,
      name: 'application_id', type: 'String',
      required: true, description: 'Unique system identifier for the application',
      sortOrder: 0, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-1` },
    update: {},
    create: {
      id: `seed-3-3-2-1`,
      name: 'application_name', type: 'String',
      required: true, description: 'Full name of the application (e.g., Salesforce Sales Cloud, SAP S/4HANA)',
      sortOrder: 1, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-2` },
    update: {},
    create: {
      id: `seed-3-3-2-2`,
      name: 'application_code', type: 'String',
      required: true, description: 'Short alphanumeric code used in integrations and references (e.g., SFDC, SAP-S4)',
      sortOrder: 2, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-3` },
    update: {},
    create: {
      id: `seed-3-3-2-3`,
      name: 'application_description', type: 'String',
      required: false, description: 'Brief description of the application\'s business purpose',
      sortOrder: 3, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-4` },
    update: {},
    create: {
      id: `seed-3-3-2-4`,
      name: 'application_type', type: 'Enum(ERP|CRM|SCM|HCM|Finance|Analytics/BI|Collaboration|Security|Integration/ESB|Custom|Other)',
      required: true, description: 'Functional classification of the application',
      sortOrder: 4, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-5` },
    update: {},
    create: {
      id: `seed-3-3-2-5`,
      name: 'delivery_model', type: 'Enum(SaaS|On-Premise|Hybrid|PaaS-Hosted|Managed Service)',
      required: true, description: 'How the application is delivered and hosted',
      sortOrder: 5, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-6` },
    update: {},
    create: {
      id: `seed-3-3-2-6`,
      name: 'criticality', type: 'Enum(Mission Critical|Business Critical|Standard|Low)',
      required: true, description: 'Business impact classification if the application is unavailable',
      sortOrder: 6, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-7` },
    update: {},
    create: {
      id: `seed-3-3-2-7`,
      name: 'status', type: 'Enum(Active|Under Implementation|Deprecated|Retired)',
      required: true, description: 'Current lifecycle status',
      sortOrder: 7, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-8` },
    update: {},
    create: {
      id: `seed-3-3-2-8`,
      name: 'business_owner', type: 'String',
      required: false, description: 'Name or role of the business stakeholder owning the application',
      sortOrder: 8, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-9` },
    update: {},
    create: {
      id: `seed-3-3-2-9`,
      name: 'it_owner', type: 'String',
      required: false, description: 'Name or role of the IT team owning operational responsibility',
      sortOrder: 9, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-10` },
    update: {},
    create: {
      id: `seed-3-3-2-10`,
      name: 'primary_user_count', type: 'Integer',
      required: false, description: 'Approximate number of primary licensed or regular users',
      sortOrder: 10, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-11` },
    update: {},
    create: {
      id: `seed-3-3-2-11`,
      name: 'go_live_date', type: 'Date',
      required: false, description: 'Date the application was placed into production',
      sortOrder: 11, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-12` },
    update: {},
    create: {
      id: `seed-3-3-2-12`,
      name: 'decommission_date', type: 'Date',
      required: false, description: 'Planned or actual date of retirement',
      sortOrder: 12, entityId: ent_3_3_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-2-13` },
    update: {},
    create: {
      id: `seed-3-3-2-13`,
      name: 'tier', type: 'Enum(Tier 1|Tier 2|Tier 3)',
      required: false, description: 'Infrastructure reliability tier assigned to this application',
      sortOrder: 13, entityId: ent_3_3_2.id,
    },
  });
  const ent_3_3_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Software Version` } },
    update: {},
    create: {
      name: `Software Version`,
      description: `=VLOOKUP(D170, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Application Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is version of","target":"Software Application","cardinality":"M:1","type":"Association","description":"A Software Version belongs to a Software Application"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-0` },
    update: {},
    create: {
      id: `seed-3-3-3-0`,
      name: 'version_id', type: 'String',
      required: true, description: 'Unique system identifier for the version record',
      sortOrder: 0, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-1` },
    update: {},
    create: {
      id: `seed-3-3-3-1`,
      name: 'application_id', type: 'String',
      required: true, description: 'FK: Software Application this version belongs to',
      sortOrder: 1, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-2` },
    update: {},
    create: {
      id: `seed-3-3-3-2`,
      name: 'version_number', type: 'String',
      required: true, description: 'Version number string (e.g., 2.4.1, 2024.1, Spring 2024)',
      sortOrder: 2, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-3` },
    update: {},
    create: {
      id: `seed-3-3-3-3`,
      name: 'version_type', type: 'Enum(Major|Minor|Patch|Hotfix|LTS)',
      required: true, description: 'Classification of the release scope',
      sortOrder: 3, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-4` },
    update: {},
    create: {
      id: `seed-3-3-3-4`,
      name: 'release_date', type: 'Date',
      required: false, description: 'Date this version was released by the vendor',
      sortOrder: 4, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-5` },
    update: {},
    create: {
      id: `seed-3-3-3-5`,
      name: 'end_of_support_date', type: 'Date',
      required: false, description: 'Date after which the vendor no longer provides patches or support',
      sortOrder: 5, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-6` },
    update: {},
    create: {
      id: `seed-3-3-3-6`,
      name: 'is_current', type: 'Boolean',
      required: true, description: 'Flag indicating this is the version currently deployed in production',
      sortOrder: 6, entityId: ent_3_3_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-3-7` },
    update: {},
    create: {
      id: `seed-3-3-3-7`,
      name: 'release_notes_url', type: 'String',
      required: false, description: 'URL to official vendor release notes',
      sortOrder: 7, entityId: ent_3_3_3.id,
    },
  });
  const ent_3_3_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cloud Account` } },
    update: {},
    create: {
      name: `Cloud Account`,
      description: `=VLOOKUP(D171, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Cloud Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"belongs to","target":"Cloud Provider","cardinality":"M:1","type":"Association","description":"Each Cloud Account exists under exactly one Cloud Provider"}],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-0` },
    update: {},
    create: {
      id: `seed-3-3-4-0`,
      name: 'account_id', type: 'String',
      required: true, description: 'Unique system identifier for the cloud account',
      sortOrder: 0, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-1` },
    update: {},
    create: {
      id: `seed-3-3-4-1`,
      name: 'account_name', type: 'String',
      required: true, description: 'Human-readable name of the cloud account',
      sortOrder: 1, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-2` },
    update: {},
    create: {
      id: `seed-3-3-4-2`,
      name: 'account_number', type: 'String',
      required: true, description: 'Provider-assigned account/subscription/project ID',
      sortOrder: 2, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-3` },
    update: {},
    create: {
      id: `seed-3-3-4-3`,
      name: 'provider_id', type: 'String',
      required: true, description: 'FK: Cloud Provider this account belongs to',
      sortOrder: 3, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-4` },
    update: {},
    create: {
      id: `seed-3-3-4-4`,
      name: 'account_purpose', type: 'Enum(Production|Non-Production|Sandbox|Shared Services|Security|Networking)',
      required: true, description: 'Primary purpose of this account in the cloud operating model',
      sortOrder: 4, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-5` },
    update: {},
    create: {
      id: `seed-3-3-4-5`,
      name: 'owning_team', type: 'String',
      required: false, description: 'Internal team or business unit responsible for this account',
      sortOrder: 5, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-6` },
    update: {},
    create: {
      id: `seed-3-3-4-6`,
      name: 'cost_center', type: 'String',
      required: false, description: 'Finance cost center for billing allocation',
      sortOrder: 6, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-7` },
    update: {},
    create: {
      id: `seed-3-3-4-7`,
      name: 'monthly_budget_usd', type: 'Decimal',
      required: false, description: 'Approved monthly spend budget in USD',
      sortOrder: 7, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-8` },
    update: {},
    create: {
      id: `seed-3-3-4-8`,
      name: 'status', type: 'Enum(Active|Suspended|Closed)',
      required: true, description: 'Operational status of the cloud account',
      sortOrder: 8, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-9` },
    update: {},
    create: {
      id: `seed-3-3-4-9`,
      name: 'created_date', type: 'Date',
      required: false, description: 'Date the account was provisioned',
      sortOrder: 9, entityId: ent_3_3_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-4-10` },
    update: {},
    create: {
      id: `seed-3-3-4-10`,
      name: 'mfa_enabled', type: 'Boolean',
      required: true, description: 'Whether multi-factor authentication is enforced at root/admin level',
      sortOrder: 10, entityId: ent_3_3_4.id,
    },
  });
  const ent_3_3_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cloud Provider` } },
    update: {},
    create: {
      name: `Cloud Provider`,
      description: `=VLOOKUP(D172, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Cloud Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"offers","target":"Cloud Service Offering","cardinality":"1:M","type":"Association","description":"A Cloud Provider publishes many distinct service offerings (e.g., EC2, S3, RDS)"},{"name":"is available in","target":"Cloud Region","cardinality":"1:M","type":"Association","description":"A Cloud Provider operates infrastructure in multiple geographic regions"},{"name":"is a","target":"Technology Vendor","cardinality":"1:1","type":"Inheritance","description":"A Cloud Provider is a specialised type of Technology Vendor \u2014 it can have contracts and license entitlements like any other vendor"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-0` },
    update: {},
    create: {
      id: `seed-3-3-5-0`,
      name: 'provider_id', type: 'String',
      required: true, description: 'Unique system identifier for the cloud provider',
      sortOrder: 0, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-1` },
    update: {},
    create: {
      id: `seed-3-3-5-1`,
      name: 'provider_name', type: 'String',
      required: true, description: 'Full legal or brand name (e.g., Amazon Web Services, Microsoft Azure)',
      sortOrder: 1, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-2` },
    update: {},
    create: {
      id: `seed-3-3-5-2`,
      name: 'provider_code', type: 'String',
      required: true, description: 'Short canonical code used in references (e.g., AWS, AZURE, GCP, OCI)',
      sortOrder: 2, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-3` },
    update: {},
    create: {
      id: `seed-3-3-5-3`,
      name: 'provider_type', type: 'Enum(Hyperscaler|Regional|Specialist|Telco Cloud)',
      required: true, description: 'Classification of the cloud provider by scale and focus',
      sortOrder: 3, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-4` },
    update: {},
    create: {
      id: `seed-3-3-5-4`,
      name: 'hq_country', type: 'String',
      required: false, description: 'Country of the provider\'s headquarters',
      sortOrder: 4, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-5` },
    update: {},
    create: {
      id: `seed-3-3-5-5`,
      name: 'status', type: 'Enum(Active|Inactive|Evaluating)',
      required: true, description: 'Enterprise relationship status with this provider',
      sortOrder: 5, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-6` },
    update: {},
    create: {
      id: `seed-3-3-5-6`,
      name: 'preferred_tier', type: 'Enum(Strategic|Approved|Restricted)',
      required: false, description: 'Internal classification of the provider\'s strategic importance',
      sortOrder: 6, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-7` },
    update: {},
    create: {
      id: `seed-3-3-5-7`,
      name: 'support_tier', type: 'String',
      required: false, description: 'Contracted support tier with the provider (e.g., Enterprise, Business)',
      sortOrder: 7, entityId: ent_3_3_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-5-8` },
    update: {},
    create: {
      id: `seed-3-3-5-8`,
      name: 'account_manager', type: 'String',
      required: false, description: 'Name of the provider\'s account manager',
      sortOrder: 8, entityId: ent_3_3_5.id,
    },
  });
  const ent_3_3_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cloud Region` } },
    update: {},
    create: {
      name: `Cloud Region`,
      description: `=VLOOKUP(D173, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Cloud Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"offered by","target":"Cloud Provider","cardinality":"M:1","type":"Association","description":"A Cloud Region is offered by a Cloud Provider"}],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-0` },
    update: {},
    create: {
      id: `seed-3-3-6-0`,
      name: 'region_id', type: 'String',
      required: true, description: 'Unique system identifier for the region',
      sortOrder: 0, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-1` },
    update: {},
    create: {
      id: `seed-3-3-6-1`,
      name: 'region_code', type: 'String',
      required: true, description: 'Provider\'s canonical region code (e.g., us-east-1, eastus, europe-west1)',
      sortOrder: 1, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-2` },
    update: {},
    create: {
      id: `seed-3-3-6-2`,
      name: 'region_name', type: 'String',
      required: true, description: 'Human-readable name (e.g., US East - N. Virginia, West Europe)',
      sortOrder: 2, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-3` },
    update: {},
    create: {
      id: `seed-3-3-6-3`,
      name: 'provider_id', type: 'String',
      required: true, description: 'FK: Cloud Provider this region belongs to',
      sortOrder: 3, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-4` },
    update: {},
    create: {
      id: `seed-3-3-6-4`,
      name: 'continent', type: 'String',
      required: true, description: 'Continent of the region (e.g., North America, Europe, Asia Pacific)',
      sortOrder: 4, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-5` },
    update: {},
    create: {
      id: `seed-3-3-6-5`,
      name: 'country', type: 'String',
      required: true, description: 'Country where the primary data centres are located',
      sortOrder: 5, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-6` },
    update: {},
    create: {
      id: `seed-3-3-6-6`,
      name: 'availability_zones', type: 'Integer',
      required: false, description: 'Number of availability zones within this region',
      sortOrder: 6, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-7` },
    update: {},
    create: {
      id: `seed-3-3-6-7`,
      name: 'data_residency_zone', type: 'String',
      required: false, description: 'Data sovereignty classification (e.g., EU, US, APAC)',
      sortOrder: 7, entityId: ent_3_3_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-6-8` },
    update: {},
    create: {
      id: `seed-3-3-6-8`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether this region is currently used by the enterprise',
      sortOrder: 8, entityId: ent_3_3_6.id,
    },
  });
  const ent_3_3_7 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cloud Resource` } },
    update: {},
    create: {
      name: `Cloud Resource`,
      description: `=VLOOKUP(D174, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Cloud Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is an instance of","target":"Cloud Service Offering","cardinality":"M:1","type":"Association","description":"A provisioned Cloud Resource is always a deployment of a specific service offering"},{"name":"is hosted in","target":"Cloud Region","cardinality":"M:1","type":"Association","description":"Every Cloud Resource is deployed to a specific Cloud Region"},{"name":"is billed to","target":"Cloud Account","cardinality":"M:1","type":"Association","description":"Cloud Resources incur costs that roll up to their parent Cloud Account"}],
      sortOrder: 7,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-0` },
    update: {},
    create: {
      id: `seed-3-3-7-0`,
      name: 'resource_id', type: 'String',
      required: true, description: 'Unique system identifier (may mirror provider-assigned ARN/resource ID)',
      sortOrder: 0, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-1` },
    update: {},
    create: {
      id: `seed-3-3-7-1`,
      name: 'resource_name', type: 'String',
      required: true, description: 'Human-readable name or label given to the resource',
      sortOrder: 1, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-2` },
    update: {},
    create: {
      id: `seed-3-3-7-2`,
      name: 'resource_type', type: 'String',
      required: true, description: 'Type of resource as named by the provider (e.g., EC2 Instance, S3 Bucket, Azure VM)',
      sortOrder: 2, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-3` },
    update: {},
    create: {
      id: `seed-3-3-7-3`,
      name: 'service_offering_id', type: 'String',
      required: true, description: 'FK: Cloud Service Offering this resource is an instance of',
      sortOrder: 3, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-4` },
    update: {},
    create: {
      id: `seed-3-3-7-4`,
      name: 'cloud_account_id', type: 'String',
      required: true, description: 'FK: Cloud Account the resource is provisioned under',
      sortOrder: 4, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-5` },
    update: {},
    create: {
      id: `seed-3-3-7-5`,
      name: 'region_code', type: 'String',
      required: true, description: 'Cloud region where the resource is deployed',
      sortOrder: 5, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-6` },
    update: {},
    create: {
      id: `seed-3-3-7-6`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Deployment environment this cloud resource is provisioned into.',
      sortOrder: 6, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-7` },
    update: {},
    create: {
      id: `seed-3-3-7-7`,
      name: 'resource_status', type: 'Enum(Running|Stopped|Terminated|Pending|Error)',
      required: true, description: 'Current operational state of the resource',
      sortOrder: 7, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-8` },
    update: {},
    create: {
      id: `seed-3-3-7-8`,
      name: 'sku', type: 'String',
      required: false, description: 'Provider pricing SKU or instance type (e.g., t3.medium, Standard_D4s_v3)',
      sortOrder: 8, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-9` },
    update: {},
    create: {
      id: `seed-3-3-7-9`,
      name: 'monthly_cost_usd', type: 'Decimal',
      required: false, description: 'Estimated or actual monthly cost in USD',
      sortOrder: 9, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-10` },
    update: {},
    create: {
      id: `seed-3-3-7-10`,
      name: 'tags', type: 'String',
      required: false, description: 'JSON-encoded key-value tag pairs applied to the resource',
      sortOrder: 10, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-11` },
    update: {},
    create: {
      id: `seed-3-3-7-11`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the resource was provisioned',
      sortOrder: 11, entityId: ent_3_3_7.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-7-12` },
    update: {},
    create: {
      id: `seed-3-3-7-12`,
      name: 'last_modified_date', type: 'Date',
      required: false, description: 'Date the resource configuration was last changed',
      sortOrder: 12, entityId: ent_3_3_7.id,
    },
  });
  const ent_3_3_8 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cloud Service Offering` } },
    update: {},
    create: {
      name: `Cloud Service Offering`,
      description: `=VLOOKUP(D175, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Cloud Model',
      subModelId: sub_3_3.id,
      relationships: [],
      sortOrder: 8,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-0` },
    update: {},
    create: {
      id: `seed-3-3-8-0`,
      name: 'service_offering_id', type: 'String',
      required: true, description: 'Unique system identifier for the cloud service offering',
      sortOrder: 0, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-1` },
    update: {},
    create: {
      id: `seed-3-3-8-1`,
      name: 'service_name', type: 'String',
      required: true, description: 'Provider-assigned name (e.g., Amazon EC2, Azure Kubernetes Service)',
      sortOrder: 1, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-2` },
    update: {},
    create: {
      id: `seed-3-3-8-2`,
      name: 'service_category', type: 'Enum(Compute|Storage|Database|Networking|AI/ML|Security|Analytics|Integration|Developer Tools|Other)',
      required: true, description: 'Functional category of the cloud service',
      sortOrder: 2, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-3` },
    update: {},
    create: {
      id: `seed-3-3-8-3`,
      name: 'service_model', type: 'Enum(IaaS|PaaS|SaaS|FaaS|CaaS|DBaaS)',
      required: true, description: 'Cloud service model classification per NIST SP 500-292',
      sortOrder: 3, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-4` },
    update: {},
    create: {
      id: `seed-3-3-8-4`,
      name: 'provider_id', type: 'String',
      required: true, description: 'FK: Cloud Provider offering this service',
      sortOrder: 4, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-5` },
    update: {},
    create: {
      id: `seed-3-3-8-5`,
      name: 'description', type: 'String',
      required: false, description: 'Summary description of what the service provides',
      sortOrder: 5, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-6` },
    update: {},
    create: {
      id: `seed-3-3-8-6`,
      name: 'documentation_url', type: 'String',
      required: false, description: 'URL to provider\'s official documentation for this service',
      sortOrder: 6, entityId: ent_3_3_8.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-8-7` },
    update: {},
    create: {
      id: `seed-3-3-8-7`,
      name: 'status', type: 'Enum(Generally Available|Preview|Deprecated|Retired)',
      required: true, description: 'Current availability status of the service',
      sortOrder: 7, entityId: ent_3_3_8.id,
    },
  });
  const ent_3_3_9 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `License Entitlement` } },
    update: {},
    create: {
      name: `License Entitlement`,
      description: `=VLOOKUP(D176, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Commercial Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"covers usage of","target":"Software Application","cardinality":"M:1","type":"Association","description":"A License Entitlement grants the right to run specific Software Applications in production"}],
      sortOrder: 9,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-0` },
    update: {},
    create: {
      id: `seed-3-3-9-0`,
      name: 'license_id', type: 'String',
      required: true, description: 'Unique system identifier for the license entitlement',
      sortOrder: 0, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-1` },
    update: {},
    create: {
      id: `seed-3-3-9-1`,
      name: 'license_name', type: 'String',
      required: true, description: 'Descriptive name of this license entitlement',
      sortOrder: 1, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-2` },
    update: {},
    create: {
      id: `seed-3-3-9-2`,
      name: 'product_id', type: 'String',
      required: true, description: 'FK: Software Product this entitlement covers',
      sortOrder: 2, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-3` },
    update: {},
    create: {
      id: `seed-3-3-9-3`,
      name: 'vendor_id', type: 'String',
      required: true, description: 'FK: Technology Vendor providing the license',
      sortOrder: 3, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-4` },
    update: {},
    create: {
      id: `seed-3-3-9-4`,
      name: 'license_type', type: 'Enum(Perpetual|Subscription|Enterprise Agreement|Open Source|Freeware|Trial|OEM)',
      required: true, description: 'Contractual structure of the license',
      sortOrder: 4, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-5` },
    update: {},
    create: {
      id: `seed-3-3-9-5`,
      name: 'quantity', type: 'Integer',
      required: false, description: 'Number of licensed units (seats, cores, instances)',
      sortOrder: 5, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-6` },
    update: {},
    create: {
      id: `seed-3-3-9-6`,
      name: 'unit_type', type: 'String',
      required: false, description: 'Unit of measurement for the quantity (e.g., Named User, Core, Instance)',
      sortOrder: 6, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-7` },
    update: {},
    create: {
      id: `seed-3-3-9-7`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Date from which the license is valid',
      sortOrder: 7, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-8` },
    update: {},
    create: {
      id: `seed-3-3-9-8`,
      name: 'expiry_date', type: 'Date',
      required: false, description: 'Date on which the license expires or renewal is required',
      sortOrder: 8, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-9` },
    update: {},
    create: {
      id: `seed-3-3-9-9`,
      name: 'annual_cost_usd', type: 'Decimal',
      required: false, description: 'Annual licence cost in USD',
      sortOrder: 9, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-10` },
    update: {},
    create: {
      id: `seed-3-3-9-10`,
      name: 'contract_reference', type: 'String',
      required: false, description: 'Reference to the governing Technology Contract',
      sortOrder: 10, entityId: ent_3_3_9.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-9-11` },
    update: {},
    create: {
      id: `seed-3-3-9-11`,
      name: 'utilisation_pct', type: 'Decimal',
      required: false, description: 'Percentage of licensed quantity currently in active use',
      sortOrder: 11, entityId: ent_3_3_9.id,
    },
  });
  const ent_3_3_10 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Software Product` } },
    update: {},
    create: {
      name: `Software Product`,
      description: `=VLOOKUP(D177, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Commercial Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is licensed through","target":"License Entitlement","cardinality":"1:M","type":"Association","description":"Enterprise rights to use a product are captured as one or more License Entitlements"}],
      sortOrder: 10,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-0` },
    update: {},
    create: {
      id: `seed-3-3-10-0`,
      name: 'product_id', type: 'String',
      required: true, description: 'Unique system identifier for the software product',
      sortOrder: 0, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-1` },
    update: {},
    create: {
      id: `seed-3-3-10-1`,
      name: 'product_name', type: 'String',
      required: true, description: 'Full name of the product (e.g., Salesforce Sales Cloud, SAP S/4HANA, PostgreSQL)',
      sortOrder: 1, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-2` },
    update: {},
    create: {
      id: `seed-3-3-10-2`,
      name: 'product_code', type: 'String',
      required: false, description: 'Short code or SKU used by the vendor',
      sortOrder: 2, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-3` },
    update: {},
    create: {
      id: `seed-3-3-10-3`,
      name: 'vendor_id', type: 'String',
      required: true, description: 'FK: Technology Vendor that publishes this product',
      sortOrder: 3, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-4` },
    update: {},
    create: {
      id: `seed-3-3-10-4`,
      name: 'product_category', type: 'Enum(ERP|CRM|SCM|HCM|Finance|BI/Analytics|Security|Infrastructure|Database|Middleware|Collaboration|Developer Tools|Other)',
      required: true, description: 'Functional category of the product',
      sortOrder: 4, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-5` },
    update: {},
    create: {
      id: `seed-3-3-10-5`,
      name: 'pricing_model', type: 'Enum(Per User/Named|Per Core|Per Instance|Usage-Based|Flat Fee|Freemium|Open Source)',
      required: true, description: 'Commercial pricing model of the product',
      sortOrder: 5, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-6` },
    update: {},
    create: {
      id: `seed-3-3-10-6`,
      name: 'current_version', type: 'String',
      required: false, description: 'Latest generally available version from the vendor',
      sortOrder: 6, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-7` },
    update: {},
    create: {
      id: `seed-3-3-10-7`,
      name: 'end_of_life_date', type: 'Date',
      required: false, description: 'Date the vendor will cease support for the product',
      sortOrder: 7, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-8` },
    update: {},
    create: {
      id: `seed-3-3-10-8`,
      name: 'licence_type', type: 'Enum(Proprietary|Open Source - Apache|Open Source - MIT|Open Source - GPL|Freeware)',
      required: false, description: 'Licence classification of the product',
      sortOrder: 8, entityId: ent_3_3_10.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-10-9` },
    update: {},
    create: {
      id: `seed-3-3-10-9`,
      name: 'status', type: 'Enum(Active|EOL Announced|EOL Reached|Evaluating)',
      required: true, description: 'Current status of the product in the enterprise portfolio',
      sortOrder: 9, entityId: ent_3_3_10.id,
    },
  });
  const ent_3_3_11 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Technology Contract` } },
    update: {},
    create: {
      name: `Technology Contract`,
      description: `=VLOOKUP(D178, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Commercial Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"includes","target":"License Entitlement","cardinality":"1:M","type":"Composition","description":"License Entitlements are typically defined within a Technology Contract"}],
      sortOrder: 11,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-0` },
    update: {},
    create: {
      id: `seed-3-3-11-0`,
      name: 'contract_id', type: 'String',
      required: true, description: 'Unique system identifier for the contract',
      sortOrder: 0, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-1` },
    update: {},
    create: {
      id: `seed-3-3-11-1`,
      name: 'contract_name', type: 'String',
      required: true, description: 'Descriptive name of the contract',
      sortOrder: 1, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-2` },
    update: {},
    create: {
      id: `seed-3-3-11-2`,
      name: 'vendor_id', type: 'String',
      required: true, description: 'FK: Technology Vendor party to the contract',
      sortOrder: 2, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-3` },
    update: {},
    create: {
      id: `seed-3-3-11-3`,
      name: 'contract_type', type: 'Enum(SaaS Subscription|License Agreement|Support & Maintenance|Professional Services|Master Service Agreement|Cloud Enterprise Agreement|NDA|Other)',
      required: true, description: 'Type of commercial arrangement',
      sortOrder: 3, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-4` },
    update: {},
    create: {
      id: `seed-3-3-11-4`,
      name: 'start_date', type: 'Date',
      required: true, description: 'Contract effective date',
      sortOrder: 4, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-5` },
    update: {},
    create: {
      id: `seed-3-3-11-5`,
      name: 'end_date', type: 'Date',
      required: false, description: 'Contract expiry or renewal date',
      sortOrder: 5, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-6` },
    update: {},
    create: {
      id: `seed-3-3-11-6`,
      name: 'auto_renewal', type: 'Boolean',
      required: false, description: 'Whether the contract automatically renews unless cancelled',
      sortOrder: 6, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-7` },
    update: {},
    create: {
      id: `seed-3-3-11-7`,
      name: 'notice_period_days', type: 'Integer',
      required: false, description: 'Days of advance notice required to terminate or not-renew',
      sortOrder: 7, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-8` },
    update: {},
    create: {
      id: `seed-3-3-11-8`,
      name: 'total_value_usd', type: 'Decimal',
      required: false, description: 'Total contract value in USD over its term',
      sortOrder: 8, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-9` },
    update: {},
    create: {
      id: `seed-3-3-11-9`,
      name: 'status', type: 'Enum(Active|Expired|Under Negotiation|Terminated|Pending Signature)',
      required: true, description: 'Current status of the contract',
      sortOrder: 9, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-10` },
    update: {},
    create: {
      id: `seed-3-3-11-10`,
      name: 'contract_owner', type: 'String',
      required: false, description: 'Internal owner responsible for managing this contract',
      sortOrder: 10, entityId: ent_3_3_11.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-11-11` },
    update: {},
    create: {
      id: `seed-3-3-11-11`,
      name: 'renewal_flag', type: 'Enum(Renew|Review|Terminate|TBD)',
      required: false, description: 'Forward-looking decision on contract renewal',
      sortOrder: 11, entityId: ent_3_3_11.id,
    },
  });
  const ent_3_3_12 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Technology Vendor` } },
    update: {},
    create: {
      name: `Technology Vendor`,
      description: `=VLOOKUP(D179, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Commercial Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"publishes","target":"Software Product","cardinality":"1:M","type":"Association","description":"A vendor offers a catalogue of software products to the market"},{"name":"is governed by","target":"Technology Contract","cardinality":"1:M","type":"Association","description":"The commercial relationship with a vendor is formalised in one or more Technology Contracts"}],
      sortOrder: 12,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-0` },
    update: {},
    create: {
      id: `seed-3-3-12-0`,
      name: 'vendor_id', type: 'String',
      required: true, description: 'Unique system identifier for the vendor',
      sortOrder: 0, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-1` },
    update: {},
    create: {
      id: `seed-3-3-12-1`,
      name: 'vendor_name', type: 'String',
      required: true, description: 'Full legal or brand name of the vendor',
      sortOrder: 1, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-2` },
    update: {},
    create: {
      id: `seed-3-3-12-2`,
      name: 'vendor_code', type: 'String',
      required: true, description: 'Short alphanumeric code used in procurement and system references',
      sortOrder: 2, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-3` },
    update: {},
    create: {
      id: `seed-3-3-12-3`,
      name: 'vendor_type', type: 'Enum(Software ISV|Hardware OEM|Cloud Provider|Managed Service Provider|Consulting|Staffing|Open Source Entity|Other)',
      required: true, description: 'Classification of the vendor\'s primary business',
      sortOrder: 3, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-4` },
    update: {},
    create: {
      id: `seed-3-3-12-4`,
      name: 'hq_country', type: 'String',
      required: false, description: 'Country of the vendor\'s headquarters',
      sortOrder: 4, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-5` },
    update: {},
    create: {
      id: `seed-3-3-12-5`,
      name: 'primary_contact', type: 'String',
      required: false, description: 'Name of the primary business contact at the vendor',
      sortOrder: 5, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-6` },
    update: {},
    create: {
      id: `seed-3-3-12-6`,
      name: 'account_manager', type: 'String',
      required: false, description: 'Name of the vendor\'s assigned account manager',
      sortOrder: 6, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-7` },
    update: {},
    create: {
      id: `seed-3-3-12-7`,
      name: 'preferred_status', type: 'Enum(Strategic|Preferred|Approved|Restricted|Blacklisted)',
      required: true, description: 'Internal procurement classification',
      sortOrder: 7, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-8` },
    update: {},
    create: {
      id: `seed-3-3-12-8`,
      name: 'status', type: 'Enum(Active|Inactive|Under Review)',
      required: true, description: 'Current engagement status',
      sortOrder: 8, entityId: ent_3_3_12.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-12-9` },
    update: {},
    create: {
      id: `seed-3-3-12-9`,
      name: 'risk_tier', type: 'Enum(Critical|High|Medium|Low)',
      required: false, description: 'Vendor risk tier based on dependency and financial exposure',
      sortOrder: 9, entityId: ent_3_3_12.id,
    },
  });
  const ent_3_3_13 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Data Asset` } },
    update: {},
    create: {
      name: `Data Asset`,
      description: `=VLOOKUP(D180, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Data Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is stored in","target":"Database","cardinality":"M:1","type":"Association","description":"A Data Asset physically resides in a specific Database"},{"name":"is subject to","target":"Technology Standard","cardinality":"M:M","type":"Association","description":"Data Assets must comply with data governance and classification standards"}],
      sortOrder: 13,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-0` },
    update: {},
    create: {
      id: `seed-3-3-13-0`,
      name: 'asset_id', type: 'String',
      required: true, description: 'Unique system identifier for the data asset',
      sortOrder: 0, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-1` },
    update: {},
    create: {
      id: `seed-3-3-13-1`,
      name: 'asset_name', type: 'String',
      required: true, description: 'Descriptive name (e.g., Customer Master, Order Transaction Log)',
      sortOrder: 1, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-2` },
    update: {},
    create: {
      id: `seed-3-3-13-2`,
      name: 'asset_description', type: 'String',
      required: false, description: 'Explanation of what data this asset contains and its purpose',
      sortOrder: 2, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-3` },
    update: {},
    create: {
      id: `seed-3-3-13-3`,
      name: 'asset_type', type: 'Enum(Database Table/Schema|File/Dataset|API Response|Event Stream|Report|Data Product|Other)',
      required: true, description: 'Structural type of the data asset',
      sortOrder: 3, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-4` },
    update: {},
    create: {
      id: `seed-3-3-13-4`,
      name: 'owning_application_id', type: 'String',
      required: true, description: 'FK: Software Application that is the system of record for this asset',
      sortOrder: 4, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-5` },
    update: {},
    create: {
      id: `seed-3-3-13-5`,
      name: 'data_domain', type: 'Enum(Customer|Product|Finance|HR|Operations|Supply Chain|Security|Reference/Master)',
      required: true, description: 'Business domain the data asset belongs to',
      sortOrder: 5, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-6` },
    update: {},
    create: {
      id: `seed-3-3-13-6`,
      name: 'classification', type: 'Enum(Public|Internal|Confidential|Restricted|PII|PHI|Financially Sensitive)',
      required: true, description: 'Data sensitivity and access classification',
      sortOrder: 6, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-7` },
    update: {},
    create: {
      id: `seed-3-3-13-7`,
      name: 'retention_period_days', type: 'Integer',
      required: false, description: 'Number of days this data must be retained per policy or regulation',
      sortOrder: 7, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-8` },
    update: {},
    create: {
      id: `seed-3-3-13-8`,
      name: 'encryption_required', type: 'Boolean',
      required: true, description: 'Whether encryption is required at rest and in transit',
      sortOrder: 8, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-9` },
    update: {},
    create: {
      id: `seed-3-3-13-9`,
      name: 'pii_flag', type: 'Boolean',
      required: true, description: 'Whether the asset contains Personally Identifiable Information',
      sortOrder: 9, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-10` },
    update: {},
    create: {
      id: `seed-3-3-13-10`,
      name: 'gdpr_applicable', type: 'Boolean',
      required: false, description: 'Whether GDPR/data protection regulations apply to this asset',
      sortOrder: 10, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-11` },
    update: {},
    create: {
      id: `seed-3-3-13-11`,
      name: 'data_steward', type: 'String',
      required: false, description: 'Role or person responsible for data quality and governance of this asset',
      sortOrder: 11, entityId: ent_3_3_13.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-13-12` },
    update: {},
    create: {
      id: `seed-3-3-13-12`,
      name: 'record_count_approx', type: 'Integer',
      required: false, description: 'Approximate number of records or rows in this data asset',
      sortOrder: 12, entityId: ent_3_3_13.id,
    },
  });
  const ent_3_3_14 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Data Integration` } },
    update: {},
    create: {
      name: `Data Integration`,
      description: `=VLOOKUP(D181, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Data Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"moves data from","target":"Software Application","cardinality":"M:1","type":"Association","description":"A Data Integration has exactly one source Software Application providing data"},{"name":"moves data to","target":"Software Application","cardinality":"M:1","type":"Association","description":"A Data Integration has exactly one target Software Application receiving data"},{"name":"is mediated by","target":"Platform Service","cardinality":"M:1","type":"Association","description":"Integrations may flow through a shared platform service such as an ESB, iPaaS or message broker"}],
      sortOrder: 14,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-0` },
    update: {},
    create: {
      id: `seed-3-3-14-0`,
      name: 'integration_id', type: 'String',
      required: true, description: 'Unique system identifier for the integration',
      sortOrder: 0, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-1` },
    update: {},
    create: {
      id: `seed-3-3-14-1`,
      name: 'integration_name', type: 'String',
      required: true, description: 'Descriptive name (e.g., SAP to Salesforce Customer Sync)',
      sortOrder: 1, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-2` },
    update: {},
    create: {
      id: `seed-3-3-14-2`,
      name: 'source_application_id', type: 'String',
      required: true, description: 'FK: Software Application providing the data',
      sortOrder: 2, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-3` },
    update: {},
    create: {
      id: `seed-3-3-14-3`,
      name: 'target_application_id', type: 'String',
      required: true, description: 'FK: Software Application receiving the data',
      sortOrder: 3, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-4` },
    update: {},
    create: {
      id: `seed-3-3-14-4`,
      name: 'integration_pattern', type: 'Enum(Real-Time API|Batch File Transfer|Event Streaming|Database Replication|ETL/ELT|Webhook|Message Queue)',
      required: true, description: 'Technical pattern used for the integration',
      sortOrder: 4, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-5` },
    update: {},
    create: {
      id: `seed-3-3-14-5`,
      name: 'direction', type: 'Enum(Unidirectional|Bidirectional)',
      required: true, description: 'Whether data flows in one direction or both',
      sortOrder: 5, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-6` },
    update: {},
    create: {
      id: `seed-3-3-14-6`,
      name: 'frequency', type: 'Enum(Real-Time|Near Real-Time|Hourly|Daily|Weekly|On-Demand)',
      required: true, description: 'How frequently data is exchanged',
      sortOrder: 6, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-7` },
    update: {},
    create: {
      id: `seed-3-3-14-7`,
      name: 'data_volume_per_run', type: 'String',
      required: false, description: 'Approximate number of records or MB transferred per execution',
      sortOrder: 7, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-8` },
    update: {},
    create: {
      id: `seed-3-3-14-8`,
      name: 'status', type: 'Enum(Active|Inactive|Under Implementation|Broken)',
      required: true, description: 'Current operational state of the integration',
      sortOrder: 8, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-9` },
    update: {},
    create: {
      id: `seed-3-3-14-9`,
      name: 'owner_team', type: 'String',
      required: false, description: 'Team responsible for operating and monitoring this integration',
      sortOrder: 9, entityId: ent_3_3_14.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-14-10` },
    update: {},
    create: {
      id: `seed-3-3-14-10`,
      name: 'middleware_platform_id', type: 'String',
      required: false, description: 'FK: Platform Service (e.g., ESB, iPaaS) used to mediate the integration',
      sortOrder: 10, entityId: ent_3_3_14.id,
    },
  });
  const ent_3_3_15 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Environment` } },
    update: {},
    create: {
      name: `Environment`,
      description: `=VLOOKUP(D182, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Governance Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"hosted in","target":"Cloud Account","cardinality":"M:1","type":"Association","description":"An Environment runs within a Cloud Account"},{"name":"uses","target":"Calendar","cardinality":"M:1","type":"Association","description":"An Environment follows a deployment calendar"}],
      sortOrder: 15,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-0` },
    update: {},
    create: {
      id: `seed-3-3-15-0`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'Unique identifier for the environment',
      sortOrder: 0, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-1` },
    update: {},
    create: {
      id: `seed-3-3-15-1`,
      name: 'environment_name', type: 'String',
      required: true, description: 'Human-readable name (e.g. Production, Staging, Development, Test, DR, Training, Sandbox)',
      sortOrder: 1, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-2` },
    update: {},
    create: {
      id: `seed-3-3-15-2`,
      name: 'environment_type', type: 'Enum(Production|Non-Production|DR)',
      required: true, description: 'Broad classification of the environment\'s purpose',
      sortOrder: 2, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-3` },
    update: {},
    create: {
      id: `seed-3-3-15-3`,
      name: 'environment_tier', type: 'Enum(Tier-1|Tier-2|Tier-3)',
      required: false, description: 'Criticality tier — Tier-1 is highest criticality, used for SLA and incident prioritisation',
      sortOrder: 3, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-4` },
    update: {},
    create: {
      id: `seed-3-3-15-4`,
      name: 'network_zone', type: 'String',
      required: false, description: 'Network isolation zone describing connectivity boundaries (e.g. DMZ, Internal, Isolated, Shared)',
      sortOrder: 4, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-5` },
    update: {},
    create: {
      id: `seed-3-3-15-5`,
      name: 'data_classification', type: 'Enum(Confidential|Internal|Public)',
      required: false, description: 'Highest data classification level permitted to be processed or stored in this environment',
      sortOrder: 5, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-6` },
    update: {},
    create: {
      id: `seed-3-3-15-6`,
      name: 'pci_in_scope', type: 'Boolean',
      required: false, description: 'Whether this environment falls within scope for PCI-DSS compliance assessments',
      sortOrder: 6, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-7` },
    update: {},
    create: {
      id: `seed-3-3-15-7`,
      name: 'change_management_process', type: 'Enum(Emergency|Standard|Normal)',
      required: false, description: 'Change advisory process applicable when modifying resources in this environment',
      sortOrder: 7, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-8` },
    update: {},
    create: {
      id: `seed-3-3-15-8`,
      name: 'cost_center_id', type: 'String',
      required: false, description: 'Cost centre code used for chargeback and financial reporting of environment costs',
      sortOrder: 8, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-9` },
    update: {},
    create: {
      id: `seed-3-3-15-9`,
      name: 'environment_owner', type: 'String',
      required: false, description: 'Team or individual accountable for the environment\'s operational health and compliance posture',
      sortOrder: 9, entityId: ent_3_3_15.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-15-10` },
    update: {},
    create: {
      id: `seed-3-3-15-10`,
      name: 'description', type: 'Text',
      required: false, description: 'Additional context or notes about the environment',
      sortOrder: 10, entityId: ent_3_3_15.id,
    },
  });
  const ent_3_3_16 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `IT Service` } },
    update: {},
    create: {
      name: `IT Service`,
      description: `=VLOOKUP(D183, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Governance Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is enabled by","target":"Software Application","cardinality":"M:M","type":"Association","description":"An IT Service is delivered through one or more Software Applications"}],
      sortOrder: 16,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-0` },
    update: {},
    create: {
      id: `seed-3-3-16-0`,
      name: 'service_id', type: 'String',
      required: true, description: 'Unique system identifier for the IT service',
      sortOrder: 0, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-1` },
    update: {},
    create: {
      id: `seed-3-3-16-1`,
      name: 'service_name', type: 'String',
      required: true, description: 'Name of the IT service (e.g., ERP Hosting Service, Enterprise Authentication)',
      sortOrder: 1, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-2` },
    update: {},
    create: {
      id: `seed-3-3-16-2`,
      name: 'service_description', type: 'String',
      required: false, description: 'Description of what the service delivers to consumers',
      sortOrder: 2, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-3` },
    update: {},
    create: {
      id: `seed-3-3-16-3`,
      name: 'service_type', type: 'Enum(Business-Facing|Technical/Infrastructure|Security|Data|Developer Platform)',
      required: true, description: 'Classification of the service\'s primary consumer and nature',
      sortOrder: 3, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-4` },
    update: {},
    create: {
      id: `seed-3-3-16-4`,
      name: 'service_owner', type: 'String',
      required: false, description: 'Role or team accountable for the service',
      sortOrder: 4, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-5` },
    update: {},
    create: {
      id: `seed-3-3-16-5`,
      name: 'sla_uptime_pct', type: 'Decimal',
      required: false, description: 'Contractual or agreed uptime SLA (e.g., 99.9)',
      sortOrder: 5, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-6` },
    update: {},
    create: {
      id: `seed-3-3-16-6`,
      name: 'rto_hours', type: 'Integer',
      required: false, description: 'Recovery Time Objective — maximum downtime before service must be restored',
      sortOrder: 6, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-7` },
    update: {},
    create: {
      id: `seed-3-3-16-7`,
      name: 'rpo_hours', type: 'Integer',
      required: false, description: 'Recovery Point Objective — maximum data loss window acceptable',
      sortOrder: 7, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-8` },
    update: {},
    create: {
      id: `seed-3-3-16-8`,
      name: 'cost_center', type: 'String',
      required: false, description: 'Finance cost center for chargebacks or showback',
      sortOrder: 8, entityId: ent_3_3_16.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-16-9` },
    update: {},
    create: {
      id: `seed-3-3-16-9`,
      name: 'status', type: 'Enum(Active|Under Design|Deprecated|Retired)',
      required: true, description: 'Lifecycle state of the IT service',
      sortOrder: 9, entityId: ent_3_3_16.id,
    },
  });
  const ent_3_3_17 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Technology Capability` } },
    update: {},
    create: {
      name: `Technology Capability`,
      description: `=VLOOKUP(D184, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Governance Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is realised by","target":"IT Service","cardinality":"M:M","type":"Association","description":"Technology Capabilities are fulfilled through the IT Services that underpin them"}],
      sortOrder: 17,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-0` },
    update: {},
    create: {
      id: `seed-3-3-17-0`,
      name: 'capability_id', type: 'String',
      required: true, description: 'Unique system identifier for the capability',
      sortOrder: 0, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-1` },
    update: {},
    create: {
      id: `seed-3-3-17-1`,
      name: 'capability_name', type: 'String',
      required: true, description: 'Descriptive name (e.g., Real-Time Demand Sensing, Identity & Access Management)',
      sortOrder: 1, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-2` },
    update: {},
    create: {
      id: `seed-3-3-17-2`,
      name: 'capability_description', type: 'String',
      required: false, description: 'Explanation of what this capability enables for the business',
      sortOrder: 2, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-3` },
    update: {},
    create: {
      id: `seed-3-3-17-3`,
      name: 'capability_domain', type: 'Enum(Customer Engagement|Supply Chain|Finance|HR|Data & Analytics|Security|Infrastructure|Integration|Developer Experience|Other)',
      required: true, description: 'Business or IT domain the capability belongs to',
      sortOrder: 3, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-4` },
    update: {},
    create: {
      id: `seed-3-3-17-4`,
      name: 'capability_level', type: 'Enum(Foundational|Differentiating|Innovative)',
      required: true, description: 'Strategic tier: whether this capability is table stakes, a differentiator or an innovation bet',
      sortOrder: 4, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-5` },
    update: {},
    create: {
      id: `seed-3-3-17-5`,
      name: 'maturity_level', type: 'Enum(1-Initial|2-Developing|3-Defined|4-Managed|5-Optimising)',
      required: true, description: 'CMM-inspired maturity assessment for this capability',
      sortOrder: 5, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-6` },
    update: {},
    create: {
      id: `seed-3-3-17-6`,
      name: 'target_maturity', type: 'Enum(1-Initial|2-Developing|3-Defined|4-Managed|5-Optimising)',
      required: false, description: 'Desired future-state maturity level',
      sortOrder: 6, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-7` },
    update: {},
    create: {
      id: `seed-3-3-17-7`,
      name: 'business_criticality', type: 'Enum(Critical|High|Medium|Low)',
      required: true, description: 'Impact on business operations if this capability is absent',
      sortOrder: 7, entityId: ent_3_3_17.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-17-8` },
    update: {},
    create: {
      id: `seed-3-3-17-8`,
      name: 'owner', type: 'String',
      required: false, description: 'Role or team accountable for the capability roadmap',
      sortOrder: 8, entityId: ent_3_3_17.id,
    },
  });
  const ent_3_3_18 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Technology Domain` } },
    update: {},
    create: {
      name: `Technology Domain`,
      description: `=VLOOKUP(D185, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Governance Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"contains","target":"Technology Capability","cardinality":"1:M","type":"Composition","description":"A Technology Domain is composed of related Technology Capabilities that it owns"},{"name":"governs","target":"Software Application","cardinality":"1:M","type":"Association","description":"Each Software Application is assigned to exactly one Technology Domain for ownership and governance"}],
      sortOrder: 18,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-0` },
    update: {},
    create: {
      id: `seed-3-3-18-0`,
      name: 'domain_id', type: 'String',
      required: true, description: 'Unique system identifier for the technology domain',
      sortOrder: 0, entityId: ent_3_3_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-1` },
    update: {},
    create: {
      id: `seed-3-3-18-1`,
      name: 'domain_name', type: 'String',
      required: true, description: 'Name of the domain (e.g., ERP & Finance Systems, Data Platform, Security & Identity)',
      sortOrder: 1, entityId: ent_3_3_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-2` },
    update: {},
    create: {
      id: `seed-3-3-18-2`,
      name: 'domain_description', type: 'String',
      required: false, description: 'Description of what belongs in this domain and its scope',
      sortOrder: 2, entityId: ent_3_3_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-3` },
    update: {},
    create: {
      id: `seed-3-3-18-3`,
      name: 'domain_type', type: 'Enum(Business Application|Infrastructure|Data & Analytics|Security|Developer Platform|Integration)',
      required: true, description: 'Classification of the domain type',
      sortOrder: 3, entityId: ent_3_3_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-4` },
    update: {},
    create: {
      id: `seed-3-3-18-4`,
      name: 'domain_owner', type: 'String',
      required: false, description: 'Role or team leading this technology domain',
      sortOrder: 4, entityId: ent_3_3_18.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-18-5` },
    update: {},
    create: {
      id: `seed-3-3-18-5`,
      name: 'parent_domain_id', type: 'String',
      required: false, description: 'FK: Parent domain if this is a sub-domain',
      sortOrder: 5, entityId: ent_3_3_18.id,
    },
  });
  const ent_3_3_19 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Technology Standard` } },
    update: {},
    create: {
      name: `Technology Standard`,
      description: `=VLOOKUP(D186, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Governance Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"governs","target":"Technology Domain","cardinality":"M:1","type":"Association","description":"A Technology Standard governs a Technology Domain"}],
      sortOrder: 19,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-0` },
    update: {},
    create: {
      id: `seed-3-3-19-0`,
      name: 'standard_id', type: 'String',
      required: true, description: 'Unique system identifier for the technology standard',
      sortOrder: 0, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-1` },
    update: {},
    create: {
      id: `seed-3-3-19-1`,
      name: 'standard_name', type: 'String',
      required: true, description: 'Name of the standard (e.g., API Design Standard, Cloud Tagging Policy)',
      sortOrder: 1, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-2` },
    update: {},
    create: {
      id: `seed-3-3-19-2`,
      name: 'standard_type', type: 'Enum(Architecture|Security|Development|Data|Integration|Infrastructure|Procurement)',
      required: true, description: 'Domain the standard applies to',
      sortOrder: 2, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-3` },
    update: {},
    create: {
      id: `seed-3-3-19-3`,
      name: 'description', type: 'String',
      required: false, description: 'What the standard requires or recommends',
      sortOrder: 3, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-4` },
    update: {},
    create: {
      id: `seed-3-3-19-4`,
      name: 'enforcement_level', type: 'Enum(Mandatory|Recommended|Informational|Retired)',
      required: true, description: 'How strictly the standard is enforced',
      sortOrder: 4, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-5` },
    update: {},
    create: {
      id: `seed-3-3-19-5`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date the standard became effective',
      sortOrder: 5, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-6` },
    update: {},
    create: {
      id: `seed-3-3-19-6`,
      name: 'review_date', type: 'Date',
      required: false, description: 'Next scheduled review date',
      sortOrder: 6, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-7` },
    update: {},
    create: {
      id: `seed-3-3-19-7`,
      name: 'owner', type: 'String',
      required: false, description: 'Team or role responsible for maintaining the standard',
      sortOrder: 7, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-8` },
    update: {},
    create: {
      id: `seed-3-3-19-8`,
      name: 'source', type: 'String',
      required: false, description: 'Origin of the standard (Internal, ISO 27001, NIST, CIS, PCI-DSS, etc.)',
      sortOrder: 8, entityId: ent_3_3_19.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-19-9` },
    update: {},
    create: {
      id: `seed-3-3-19-9`,
      name: 'version', type: 'String',
      required: false, description: 'Version of the standard document',
      sortOrder: 9, entityId: ent_3_3_19.id,
    },
  });
  const ent_3_3_20 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Cluster` } },
    update: {},
    create: {
      name: `Cluster`,
      description: `=VLOOKUP(D187, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"runs on","target":"Virtual Machine","cardinality":"M:M","type":"Association","description":"A cluster node is backed by one or more VMs; each VM may participate in one or more clusters"},{"name":"runs on","target":"Cloud Resource","cardinality":"M:M","type":"Association","description":"Managed Kubernetes clusters (EKS, AKS, GKE) run on Cloud Resources provisioned by the provider"}],
      sortOrder: 20,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-0` },
    update: {},
    create: {
      id: `seed-3-3-20-0`,
      name: 'cluster_id', type: 'String',
      required: true, description: 'Unique system identifier for the cluster',
      sortOrder: 0, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-1` },
    update: {},
    create: {
      id: `seed-3-3-20-1`,
      name: 'cluster_name', type: 'String',
      required: true, description: 'Descriptive name of the cluster',
      sortOrder: 1, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-2` },
    update: {},
    create: {
      id: `seed-3-3-20-2`,
      name: 'cluster_type', type: 'Enum(Kubernetes|ECS|Swarm|Nomad|OpenShift|Other)',
      required: true, description: 'Orchestration technology used',
      sortOrder: 2, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-3` },
    update: {},
    create: {
      id: `seed-3-3-20-3`,
      name: 'version', type: 'String',
      required: false, description: 'Version of the orchestration platform',
      sortOrder: 3, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-4` },
    update: {},
    create: {
      id: `seed-3-3-20-4`,
      name: 'node_count', type: 'Integer',
      required: false, description: 'Number of worker nodes in the cluster',
      sortOrder: 4, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-5` },
    update: {},
    create: {
      id: `seed-3-3-20-5`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Deployment environment this cluster serves.',
      sortOrder: 5, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-6` },
    update: {},
    create: {
      id: `seed-3-3-20-6`,
      name: 'hosting', type: 'Enum(Self-Hosted|Managed Cloud)',
      required: true, description: 'Whether the cluster is self-managed or a managed service (e.g., EKS, AKS, GKE)',
      sortOrder: 6, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-7` },
    update: {},
    create: {
      id: `seed-3-3-20-7`,
      name: 'status', type: 'Enum(Active|Degraded|Offline)',
      required: true, description: 'Current operational health of the cluster',
      sortOrder: 7, entityId: ent_3_3_20.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-20-8` },
    update: {},
    create: {
      id: `seed-3-3-20-8`,
      name: 'cloud_account_id', type: 'String',
      required: false, description: 'FK: Cloud Account if cluster runs on cloud infrastructure',
      sortOrder: 8, entityId: ent_3_3_20.id,
    },
  });
  const ent_3_3_21 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Container` } },
    update: {},
    create: {
      name: `Container`,
      description: `=VLOOKUP(D188, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is managed by","target":"Cluster","cardinality":"M:1","type":"Association","description":"All containers in an orchestrated deployment are managed by a single Cluster"}],
      sortOrder: 21,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-0` },
    update: {},
    create: {
      id: `seed-3-3-21-0`,
      name: 'container_id', type: 'String',
      required: true, description: 'Unique identifier for the container instance',
      sortOrder: 0, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-1` },
    update: {},
    create: {
      id: `seed-3-3-21-1`,
      name: 'container_name', type: 'String',
      required: true, description: 'Name of the running container',
      sortOrder: 1, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-2` },
    update: {},
    create: {
      id: `seed-3-3-21-2`,
      name: 'image_name', type: 'String',
      required: true, description: 'Container image used (e.g., nginx, my-app)',
      sortOrder: 2, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-3` },
    update: {},
    create: {
      id: `seed-3-3-21-3`,
      name: 'image_version', type: 'String',
      required: true, description: 'Image tag or version (e.g., 1.24, latest)',
      sortOrder: 3, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-4` },
    update: {},
    create: {
      id: `seed-3-3-21-4`,
      name: 'cpu_request', type: 'String',
      required: false, description: 'CPU resource request expressed in millicores (e.g., 500m)',
      sortOrder: 4, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-5` },
    update: {},
    create: {
      id: `seed-3-3-21-5`,
      name: 'memory_request', type: 'String',
      required: false, description: 'Memory resource request (e.g., 256Mi, 1Gi)',
      sortOrder: 5, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-6` },
    update: {},
    create: {
      id: `seed-3-3-21-6`,
      name: 'container_status', type: 'Enum(Running|Stopped|Crashed|Pending|Evicted)',
      required: true, description: 'Current runtime state of the container',
      sortOrder: 6, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-7` },
    update: {},
    create: {
      id: `seed-3-3-21-7`,
      name: 'namespace', type: 'String',
      required: false, description: 'Kubernetes namespace the container runs within',
      sortOrder: 7, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-8` },
    update: {},
    create: {
      id: `seed-3-3-21-8`,
      name: 'cluster_id', type: 'String',
      required: false, description: 'FK: Cluster this container belongs to',
      sortOrder: 8, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-9` },
    update: {},
    create: {
      id: `seed-3-3-21-9`,
      name: 'restart_count', type: 'Integer',
      required: false, description: 'Number of times the container has been restarted',
      sortOrder: 9, entityId: ent_3_3_21.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-21-10` },
    update: {},
    create: {
      id: `seed-3-3-21-10`,
      name: 'image_registry', type: 'String',
      required: false, description: 'Registry from which the image was pulled (e.g., DockerHub, ECR)',
      sortOrder: 10, entityId: ent_3_3_21.id,
    },
  });
  const ent_3_3_22 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Data Center` } },
    update: {},
    create: {
      name: `Data Center`,
      description: `=VLOOKUP(D189, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [],
      sortOrder: 22,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-0` },
    update: {},
    create: {
      id: `seed-3-3-22-0`,
      name: 'datacenter_id', type: 'String',
      required: true, description: 'Unique system identifier for the data center',
      sortOrder: 0, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-1` },
    update: {},
    create: {
      id: `seed-3-3-22-1`,
      name: 'datacenter_code', type: 'String',
      required: true, description: 'Short alphanumeric code used in system references (e.g. DC-LON-01)',
      sortOrder: 1, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-2` },
    update: {},
    create: {
      id: `seed-3-3-22-2`,
      name: 'datacenter_name', type: 'String',
      required: true, description: 'Descriptive name of the data center facility',
      sortOrder: 2, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-3` },
    update: {},
    create: {
      id: `seed-3-3-22-3`,
      name: 'datacenter_type', type: 'Enum(Owned|Colocation|Edge|Hyperscale)',
      required: true, description: 'Indicates the ownership and operational model of the facility',
      sortOrder: 3, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-4` },
    update: {},
    create: {
      id: `seed-3-3-22-4`,
      name: 'address', type: 'String',
      required: false, description: 'Physical street address of the facility',
      sortOrder: 4, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-5` },
    update: {},
    create: {
      id: `seed-3-3-22-5`,
      name: 'city', type: 'String',
      required: true, description: 'City where the data center is located',
      sortOrder: 5, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-6` },
    update: {},
    create: {
      id: `seed-3-3-22-6`,
      name: 'country', type: 'String',
      required: true, description: 'Country where the data center is located',
      sortOrder: 6, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-7` },
    update: {},
    create: {
      id: `seed-3-3-22-7`,
      name: 'tier_level', type: 'Enum(Tier1|Tier2|Tier3|Tier4)',
      required: false, description: 'Uptime Institute tier classification for redundancy and availability',
      sortOrder: 7, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-8` },
    update: {},
    create: {
      id: `seed-3-3-22-8`,
      name: 'total_power_kw', type: 'Number',
      required: false, description: 'Total available IT power capacity in kilowatts',
      sortOrder: 8, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-9` },
    update: {},
    create: {
      id: `seed-3-3-22-9`,
      name: 'pue_rating', type: 'Decimal',
      required: false, description: 'Power Usage Effectiveness (PUE) rating; lower is more efficient',
      sortOrder: 9, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-10` },
    update: {},
    create: {
      id: `seed-3-3-22-10`,
      name: 'status', type: 'Enum(Active|Decommissioned|Under Construction)',
      required: true, description: 'Current operational status of the facility',
      sortOrder: 10, entityId: ent_3_3_22.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-22-11` },
    update: {},
    create: {
      id: `seed-3-3-22-11`,
      name: 'operator', type: 'String',
      required: false, description: 'Name of the team or vendor operating the facility',
      sortOrder: 11, entityId: ent_3_3_22.id,
    },
  });
  const ent_3_3_23 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Network Segment` } },
    update: {},
    create: {
      name: `Network Segment`,
      description: `=VLOOKUP(D190, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is defined within","target":"Data Center","cardinality":"M:1","type":"Association","description":"A Network Segment is scoped to a Data Center or cloud account boundary"}],
      sortOrder: 23,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-0` },
    update: {},
    create: {
      id: `seed-3-3-23-0`,
      name: 'network_id', type: 'String',
      required: true, description: 'Unique system identifier for the network segment',
      sortOrder: 0, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-1` },
    update: {},
    create: {
      id: `seed-3-3-23-1`,
      name: 'network_name', type: 'String',
      required: true, description: 'Human-readable name of the network segment',
      sortOrder: 1, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-2` },
    update: {},
    create: {
      id: `seed-3-3-23-2`,
      name: 'cidr_range', type: 'String',
      required: true, description: 'IP address range in CIDR notation (e.g., 10.0.1.0/24)',
      sortOrder: 2, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-3` },
    update: {},
    create: {
      id: `seed-3-3-23-3`,
      name: 'network_type', type: 'Enum(LAN|WAN|VLAN|VPN|DMZ|Internet|Private Link)',
      required: true, description: 'Classification of the network segment by topology and purpose',
      sortOrder: 3, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-4` },
    update: {},
    create: {
      id: `seed-3-3-23-4`,
      name: 'vlan_id', type: 'Integer',
      required: false, description: 'VLAN ID if applicable (802.1Q tagging)',
      sortOrder: 4, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-5` },
    update: {},
    create: {
      id: `seed-3-3-23-5`,
      name: 'gateway', type: 'String',
      required: false, description: 'Default gateway IP address for the segment',
      sortOrder: 5, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-6` },
    update: {},
    create: {
      id: `seed-3-3-23-6`,
      name: 'dns_servers', type: 'String',
      required: false, description: 'Comma-separated list of DNS server IPs',
      sortOrder: 6, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-7` },
    update: {},
    create: {
      id: `seed-3-3-23-7`,
      name: 'datacenter_id', type: 'String',
      required: false, description: 'FK: Data Center this network segment belongs to',
      sortOrder: 7, entityId: ent_3_3_23.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-23-8` },
    update: {},
    create: {
      id: `seed-3-3-23-8`,
      name: 'status', type: 'Enum(Active|Inactive|Planned)',
      required: true, description: 'Operational status of the network segment',
      sortOrder: 8, entityId: ent_3_3_23.id,
    },
  });
  const ent_3_3_24 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Physical Server` } },
    update: {},
    create: {
      name: `Physical Server`,
      description: `=VLOOKUP(D191, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is located in","target":"Data Center","cardinality":"M:1","type":"Association","description":"Each Physical Server resides in exactly one Data Center; a Data Center houses many servers"},{"name":"hosts","target":"Virtual Machine","cardinality":"1:M","type":"Composition","description":"A Physical Server can run multiple Virtual Machines via a hypervisor layer"}],
      sortOrder: 24,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-0` },
    update: {},
    create: {
      id: `seed-3-3-24-0`,
      name: 'server_id', type: 'String',
      required: true, description: 'Unique system identifier for the server',
      sortOrder: 0, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-1` },
    update: {},
    create: {
      id: `seed-3-3-24-1`,
      name: 'hostname', type: 'String',
      required: true, description: 'Network hostname assigned to the server',
      sortOrder: 1, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-2` },
    update: {},
    create: {
      id: `seed-3-3-24-2`,
      name: 'serial_number', type: 'String',
      required: false, description: 'Hardware serial number (used for warranty and asset tracking)',
      sortOrder: 2, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-3` },
    update: {},
    create: {
      id: `seed-3-3-24-3`,
      name: 'make', type: 'String',
      required: true, description: 'Hardware manufacturer (e.g., Dell, HPE, Lenovo, Supermicro)',
      sortOrder: 3, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-4` },
    update: {},
    create: {
      id: `seed-3-3-24-4`,
      name: 'model_number', type: 'String',
      required: true, description: 'Hardware model designation (e.g., PowerEdge R750)',
      sortOrder: 4, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-5` },
    update: {},
    create: {
      id: `seed-3-3-24-5`,
      name: 'cpu_cores', type: 'Integer',
      required: false, description: 'Total physical CPU cores available',
      sortOrder: 5, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-6` },
    update: {},
    create: {
      id: `seed-3-3-24-6`,
      name: 'ram_gb', type: 'Integer',
      required: false, description: 'Total RAM in gigabytes',
      sortOrder: 6, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-7` },
    update: {},
    create: {
      id: `seed-3-3-24-7`,
      name: 'storage_gb', type: 'Integer',
      required: false, description: 'Total directly attached storage in gigabytes',
      sortOrder: 7, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-8` },
    update: {},
    create: {
      id: `seed-3-3-24-8`,
      name: 'server_type', type: 'Enum(Rack|Blade|Tower|HCI)',
      required: true, description: 'Form factor classification of the server hardware',
      sortOrder: 8, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-9` },
    update: {},
    create: {
      id: `seed-3-3-24-9`,
      name: 'status', type: 'Enum(Active|In Maintenance|Decommissioned|Spare)',
      required: true, description: 'Current operational lifecycle state',
      sortOrder: 9, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-10` },
    update: {},
    create: {
      id: `seed-3-3-24-10`,
      name: 'os_installed', type: 'String',
      required: false, description: 'Operating system and version installed on bare metal',
      sortOrder: 10, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-11` },
    update: {},
    create: {
      id: `seed-3-3-24-11`,
      name: 'purchase_date', type: 'Date',
      required: false, description: 'Date the hardware was procured',
      sortOrder: 11, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-12` },
    update: {},
    create: {
      id: `seed-3-3-24-12`,
      name: 'warranty_expiry', type: 'Date',
      required: false, description: 'Date hardware warranty expires',
      sortOrder: 12, entityId: ent_3_3_24.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-24-13` },
    update: {},
    create: {
      id: `seed-3-3-24-13`,
      name: 'datacenter_id', type: 'String',
      required: true, description: 'FK: Data Center where this server is physically located',
      sortOrder: 13, entityId: ent_3_3_24.id,
    },
  });
  const ent_3_3_25 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Virtual Machine` } },
    update: {},
    create: {
      name: `Virtual Machine`,
      description: `=VLOOKUP(D192, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Infrastructure Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is a specialisation of","target":"Cloud Resource","cardinality":"1:1","type":"Inheritance","description":"When a VM is provisioned from a cloud provider it is a Cloud Resource; on-premise VMs are standalone"},{"name":"runs","target":"Container","cardinality":"1:M","type":"Composition","description":"Containers are scheduled onto Virtual Machine (or bare-metal) compute nodes"},{"name":"is connected to","target":"Network Segment","cardinality":"M:M","type":"Association","description":"A VM may have network interfaces on one or more segments for different traffic zones"}],
      sortOrder: 25,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-0` },
    update: {},
    create: {
      id: `seed-3-3-25-0`,
      name: 'vm_id', type: 'String',
      required: true, description: 'Unique system identifier for the virtual machine',
      sortOrder: 0, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-1` },
    update: {},
    create: {
      id: `seed-3-3-25-1`,
      name: 'vm_name', type: 'String',
      required: true, description: 'Name assigned to the VM within its management platform',
      sortOrder: 1, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-2` },
    update: {},
    create: {
      id: `seed-3-3-25-2`,
      name: 'vcpu_count', type: 'Integer',
      required: true, description: 'Number of virtual CPUs allocated',
      sortOrder: 2, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-3` },
    update: {},
    create: {
      id: `seed-3-3-25-3`,
      name: 'ram_gb', type: 'Integer',
      required: true, description: 'RAM allocated in gigabytes',
      sortOrder: 3, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-4` },
    update: {},
    create: {
      id: `seed-3-3-25-4`,
      name: 'storage_gb', type: 'Integer',
      required: true, description: 'Virtual disk storage allocated in gigabytes',
      sortOrder: 4, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-5` },
    update: {},
    create: {
      id: `seed-3-3-25-5`,
      name: 'os_type', type: 'String',
      required: true, description: 'Operating system family (e.g., Linux, Windows)',
      sortOrder: 5, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-6` },
    update: {},
    create: {
      id: `seed-3-3-25-6`,
      name: 'os_version', type: 'String',
      required: false, description: 'Specific OS version (e.g., Ubuntu 22.04, Windows Server 2022)',
      sortOrder: 6, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-7` },
    update: {},
    create: {
      id: `seed-3-3-25-7`,
      name: 'vm_status', type: 'Enum(Running|Stopped|Suspended|Archived)',
      required: true, description: 'Current runtime state of the virtual machine',
      sortOrder: 7, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-8` },
    update: {},
    create: {
      id: `seed-3-3-25-8`,
      name: 'ip_address', type: 'String',
      required: false, description: 'Primary IP address assigned to the VM',
      sortOrder: 8, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-9` },
    update: {},
    create: {
      id: `seed-3-3-25-9`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Deployment environment (Production, Staging, Development, Test, DR) this VM belongs to. Null if unclassified.',
      sortOrder: 9, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-10` },
    update: {},
    create: {
      id: `seed-3-3-25-10`,
      name: 'host_server_id', type: 'String',
      required: false, description: 'FK: Physical Server that hosts this VM via a hypervisor — null for cloud-provisioned VMs',
      sortOrder: 10, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-11` },
    update: {},
    create: {
      id: `seed-3-3-25-11`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the VM was provisioned',
      sortOrder: 11, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-12` },
    update: {},
    create: {
      id: `seed-3-3-25-12`,
      name: 'last_snapshot_date', type: 'Date',
      required: false, description: 'Date of the most recent backup snapshot',
      sortOrder: 12, entityId: ent_3_3_25.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-25-13` },
    update: {},
    create: {
      id: `seed-3-3-25-13`,
      name: 'cloud_resource_id', type: 'String',
      required: false, description: 'FK: Cloud Resource record representing this VM when cloud-provisioned — null for on-premise VMs',
      sortOrder: 13, entityId: ent_3_3_25.id,
    },
  });
  const ent_3_3_26 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `CI/CD Pipeline` } },
    update: {},
    create: {
      name: `CI/CD Pipeline`,
      description: `=VLOOKUP(D193, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Platform Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"deploys","target":"Application Instance","cardinality":"M:1","type":"Association","description":"A CI/CD Pipeline automates the build and deployment of a specific Application Instance"}],
      sortOrder: 26,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-0` },
    update: {},
    create: {
      id: `seed-3-3-26-0`,
      name: 'pipeline_id', type: 'String',
      required: true, description: 'Unique system identifier for the pipeline',
      sortOrder: 0, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-1` },
    update: {},
    create: {
      id: `seed-3-3-26-1`,
      name: 'pipeline_name', type: 'String',
      required: true, description: 'Descriptive name of the pipeline',
      sortOrder: 1, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-2` },
    update: {},
    create: {
      id: `seed-3-3-26-2`,
      name: 'pipeline_tool', type: 'String',
      required: true, description: 'CI/CD tooling used (e.g., GitHub Actions, Jenkins, GitLab CI, Azure DevOps)',
      sortOrder: 2, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-3` },
    update: {},
    create: {
      id: `seed-3-3-26-3`,
      name: 'target_application_id', type: 'String',
      required: true, description: 'FK: Software Application this pipeline deploys',
      sortOrder: 3, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-4` },
    update: {},
    create: {
      id: `seed-3-3-26-4`,
      name: 'target_environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Target environment this pipeline deploys to. Null for multi-environment pipelines.',
      sortOrder: 4, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-5` },
    update: {},
    create: {
      id: `seed-3-3-26-5`,
      name: 'trigger_type', type: 'Enum(Push|Pull Request|Schedule|Manual|Webhook)',
      required: true, description: 'What initiates a pipeline run',
      sortOrder: 5, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-6` },
    update: {},
    create: {
      id: `seed-3-3-26-6`,
      name: 'average_duration_min', type: 'Integer',
      required: false, description: 'Average pipeline execution time in minutes',
      sortOrder: 6, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-7` },
    update: {},
    create: {
      id: `seed-3-3-26-7`,
      name: 'status', type: 'Enum(Active|Disabled|Under Configuration)',
      required: true, description: 'Current operational state of the pipeline',
      sortOrder: 7, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-8` },
    update: {},
    create: {
      id: `seed-3-3-26-8`,
      name: 'last_run_date', type: 'Date',
      required: false, description: 'Date of the most recent pipeline execution',
      sortOrder: 8, entityId: ent_3_3_26.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-26-9` },
    update: {},
    create: {
      id: `seed-3-3-26-9`,
      name: 'success_rate_pct', type: 'Decimal',
      required: false, description: 'Percentage of recent executions that completed successfully',
      sortOrder: 9, entityId: ent_3_3_26.id,
    },
  });
  const ent_3_3_27 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Database` } },
    update: {},
    create: {
      name: `Database`,
      description: `=VLOOKUP(D194, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Platform Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is hosted on","target":"Cloud Resource","cardinality":"M:1","type":"Association","description":"When using DBaaS the database runs on a provider-managed Cloud Resource"},{"name":"is hosted on","target":"Virtual Machine","cardinality":"M:1","type":"Association","description":"Self-hosted databases run on Virtual Machines or bare-metal servers"}],
      sortOrder: 27,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-0` },
    update: {},
    create: {
      id: `seed-3-3-27-0`,
      name: 'database_id', type: 'String',
      required: true, description: 'Unique system identifier for the database',
      sortOrder: 0, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-1` },
    update: {},
    create: {
      id: `seed-3-3-27-1`,
      name: 'database_name', type: 'String',
      required: true, description: 'Name of the database instance or cluster',
      sortOrder: 1, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-2` },
    update: {},
    create: {
      id: `seed-3-3-27-2`,
      name: 'database_type', type: 'Enum(Relational|Document|Graph|Key-Value|Time-Series|Wide-Column|Vector|Search|In-Memory)',
      required: true, description: 'Structural type of the database engine',
      sortOrder: 2, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-3` },
    update: {},
    create: {
      id: `seed-3-3-27-3`,
      name: 'engine', type: 'String',
      required: true, description: 'Specific database engine (e.g., PostgreSQL 15, MySQL 8, Oracle 19c, MongoDB 6)',
      sortOrder: 3, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-4` },
    update: {},
    create: {
      id: `seed-3-3-27-4`,
      name: 'hosting', type: 'Enum(DBaaS|Self-Hosted on VM|Self-Hosted on Container|On-Premise|Managed Service)',
      required: true, description: 'How the database is deployed and operated',
      sortOrder: 4, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-5` },
    update: {},
    create: {
      id: `seed-3-3-27-5`,
      name: 'size_gb', type: 'Decimal',
      required: false, description: 'Current database size in gigabytes',
      sortOrder: 5, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-6` },
    update: {},
    create: {
      id: `seed-3-3-27-6`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Environment this database instance serves.',
      sortOrder: 6, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-7` },
    update: {},
    create: {
      id: `seed-3-3-27-7`,
      name: 'backup_enabled', type: 'Boolean',
      required: true, description: 'Whether automated backups are configured',
      sortOrder: 7, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-8` },
    update: {},
    create: {
      id: `seed-3-3-27-8`,
      name: 'encryption_at_rest', type: 'Boolean',
      required: true, description: 'Whether data is encrypted at rest',
      sortOrder: 8, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-9` },
    update: {},
    create: {
      id: `seed-3-3-27-9`,
      name: 'encryption_in_transit', type: 'Boolean',
      required: true, description: 'Whether TLS/SSL is enforced for all connections',
      sortOrder: 9, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-10` },
    update: {},
    create: {
      id: `seed-3-3-27-10`,
      name: 'primary_application_id', type: 'String',
      required: false, description: 'FK: Software Application that primarily owns this database',
      sortOrder: 10, entityId: ent_3_3_27.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-27-11` },
    update: {},
    create: {
      id: `seed-3-3-27-11`,
      name: 'rpo_hours', type: 'Integer',
      required: false, description: 'Recovery Point Objective — maximum acceptable data loss in hours',
      sortOrder: 11, entityId: ent_3_3_27.id,
    },
  });
  const ent_3_3_28 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Platform Service` } },
    update: {},
    create: {
      name: `Platform Service`,
      description: `=VLOOKUP(D195, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      modelType: 'Platform Model',
      subModelId: sub_3_3.id,
      relationships: [{"name":"is hosted on","target":"Cloud Resource","cardinality":"M:1","type":"Association","description":"Managed platform services (e.g., Kafka on Confluent Cloud) run on provider Cloud Resources"}],
      sortOrder: 28,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-0` },
    update: {},
    create: {
      id: `seed-3-3-28-0`,
      name: 'platform_service_id', type: 'String',
      required: true, description: 'Unique system identifier for the platform service',
      sortOrder: 0, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-1` },
    update: {},
    create: {
      id: `seed-3-3-28-1`,
      name: 'platform_service_name', type: 'String',
      required: true, description: 'Descriptive name (e.g., Enterprise API Gateway, Kafka Event Bus)',
      sortOrder: 1, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-2` },
    update: {},
    create: {
      id: `seed-3-3-28-2`,
      name: 'platform_type', type: 'Enum(API Gateway|Message Broker|Identity Provider|Caching|Search|CI/CD Pipeline|Monitoring|Observability|Service Mesh|Other)',
      required: true, description: 'Functional category of the platform service',
      sortOrder: 2, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-3` },
    update: {},
    create: {
      id: `seed-3-3-28-3`,
      name: 'hosting_model', type: 'Enum(Managed Cloud|Self-Hosted|SaaS)',
      required: true, description: 'How and where the platform service is operated',
      sortOrder: 3, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-4` },
    update: {},
    create: {
      id: `seed-3-3-28-4`,
      name: 'technology', type: 'String',
      required: false, description: 'Underlying technology or product (e.g., Kong, Kafka, Keycloak, Datadog)',
      sortOrder: 4, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-5` },
    update: {},
    create: {
      id: `seed-3-3-28-5`,
      name: 'version', type: 'String',
      required: false, description: 'Version of the platform technology in use',
      sortOrder: 5, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-6` },
    update: {},
    create: {
      id: `seed-3-3-28-6`,
      name: 'environment_id', type: 'UUID',
      required: true, description: 'FK → Environment. Environment this platform service is provisioned for.',
      sortOrder: 6, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-7` },
    update: {},
    create: {
      id: `seed-3-3-28-7`,
      name: 'team_owner', type: 'String',
      required: false, description: 'Internal team responsible for operating the platform service',
      sortOrder: 7, entityId: ent_3_3_28.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-28-8` },
    update: {},
    create: {
      id: `seed-3-3-28-8`,
      name: 'status', type: 'Enum(Active|Deprecated|Under Implementation)',
      required: true, description: 'Current operational lifecycle state',
      sortOrder: 8, entityId: ent_3_3_28.id,
    },
  });
  const ent_3_3_29 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `Role` } },
    update: {},
    create: {
      name: `Role`,
      description: `=VLOOKUP(D196, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_3.id,
      relationships: [{"name":"granted to","target":"User","cardinality":"1:M","type":"Association","description":"A Role is granted to one or more Users"}],
      sortOrder: 29,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-29-0` },
    update: {},
    create: {
      id: `seed-3-3-29-0`,
      name: 'role_id', type: 'String',
      required: true, description: 'Unique identifier for the security role',
      sortOrder: 0, entityId: ent_3_3_29.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-29-1` },
    update: {},
    create: {
      id: `seed-3-3-29-1`,
      name: 'role_name', type: 'String',
      required: true, description: 'Name of the role',
      sortOrder: 1, entityId: ent_3_3_29.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-29-2` },
    update: {},
    create: {
      id: `seed-3-3-29-2`,
      name: 'role_type', type: 'String',
      required: false, description: 'Type/category of the role (Admin, Planner, Viewer)',
      sortOrder: 2, entityId: ent_3_3_29.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-29-3` },
    update: {},
    create: {
      id: `seed-3-3-29-3`,
      name: 'description', type: 'String',
      required: false, description: 'Description of the role\'s access scope',
      sortOrder: 3, entityId: ent_3_3_29.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-29-4` },
    update: {},
    create: {
      id: `seed-3-3-29-4`,
      name: 'permissions', type: 'String',
      required: false, description: 'Comma-separated list of permissions granted to the role',
      sortOrder: 4, entityId: ent_3_3_29.id,
    },
  });
  const ent_3_3_30 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_3_3.id, name: `User` } },
    update: {},
    create: {
      name: `User`,
      description: `=VLOOKUP(D197, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_3_3.id,
      relationships: [{"name":"is a","target":"Person","cardinality":"M:1","type":"Association","description":"A User is a Person with platform access"}],
      sortOrder: 30,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-0` },
    update: {},
    create: {
      id: `seed-3-3-30-0`,
      name: 'user_id', type: 'String',
      required: true, description: 'Unique identifier for the user',
      sortOrder: 0, entityId: ent_3_3_30.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-1` },
    update: {},
    create: {
      id: `seed-3-3-30-1`,
      name: 'person_id', type: 'String',
      required: true, description: 'Person record for this user',
      sortOrder: 1, entityId: ent_3_3_30.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-2` },
    update: {},
    create: {
      id: `seed-3-3-30-2`,
      name: 'username', type: 'String',
      required: true, description: 'Login username',
      sortOrder: 2, entityId: ent_3_3_30.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-3` },
    update: {},
    create: {
      id: `seed-3-3-30-3`,
      name: 'email', type: 'String',
      required: true, description: 'Email address used for login and notifications',
      sortOrder: 3, entityId: ent_3_3_30.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-4` },
    update: {},
    create: {
      id: `seed-3-3-30-4`,
      name: 'is_active', type: 'Boolean',
      required: true, description: 'Whether the user account is active',
      sortOrder: 4, entityId: ent_3_3_30.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-3-3-30-5` },
    update: {},
    create: {
      id: `seed-3-3-30-5`,
      name: 'created_date', type: 'Date',
      required: true, description: 'Date the user account was created',
      sortOrder: 5, entityId: ent_3_3_30.id,
    },
  });
  const model_4 = await prisma.ontologyModel.upsert({
    where: { name: 'Foundation Model' },
    update: {},
    create: { name: 'Foundation Model', color: '#06B6D4', sortOrder: 4 },
  });
  const sub_4_0 = await prisma.ontologySubModel.upsert({
    where: { modelId_name: { modelId: model_4.id, name: 'Reference Data' } },
    update: {},
    create: { name: 'Reference Data', modelId: model_4.id, sortOrder: 0 },
  });
  const ent_4_0_0 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Currency` } },
    update: {},
    create: {
      name: `Currency`,
      description: `=VLOOKUP(D200, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [],
      sortOrder: 0,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-0-0` },
    update: {},
    create: {
      id: `seed-4-0-0-0`,
      name: 'currency_id', type: 'String',
      required: true, description: 'Unique identifier for the currency',
      sortOrder: 0, entityId: ent_4_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-0-1` },
    update: {},
    create: {
      id: `seed-4-0-0-1`,
      name: 'currency_code', type: 'String',
      required: true, description: 'ISO 4217 three-letter currency code (e.g. USD, EUR)',
      sortOrder: 1, entityId: ent_4_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-0-2` },
    update: {},
    create: {
      id: `seed-4-0-0-2`,
      name: 'currency_name', type: 'String',
      required: true, description: 'Full name of the currency',
      sortOrder: 2, entityId: ent_4_0_0.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-0-3` },
    update: {},
    create: {
      id: `seed-4-0-0-3`,
      name: 'symbol', type: 'String',
      required: false, description: 'Currency symbol (e.g. $, €, £)',
      sortOrder: 3, entityId: ent_4_0_0.id,
    },
  });
  const ent_4_0_1 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Currency Conversion` } },
    update: {},
    create: {
      name: `Currency Conversion`,
      description: `=VLOOKUP(D201, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [{"name":"from currency","target":"Currency","cardinality":"M:1","type":"Association","description":"Defines source Currency in a conversion"},{"name":"to currency","target":"Currency","cardinality":"M:1","type":"Association","description":"Defines target Currency in a conversion"}],
      sortOrder: 1,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-0` },
    update: {},
    create: {
      id: `seed-4-0-1-0`,
      name: 'conversion_id', type: 'String',
      required: true, description: 'Unique identifier for the currency conversion record',
      sortOrder: 0, entityId: ent_4_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-1` },
    update: {},
    create: {
      id: `seed-4-0-1-1`,
      name: 'from_currency_id', type: 'String',
      required: true, description: 'Source currency',
      sortOrder: 1, entityId: ent_4_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-2` },
    update: {},
    create: {
      id: `seed-4-0-1-2`,
      name: 'to_currency_id', type: 'String',
      required: true, description: 'Target currency',
      sortOrder: 2, entityId: ent_4_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-3` },
    update: {},
    create: {
      id: `seed-4-0-1-3`,
      name: 'conversion_rate', type: 'Decimal',
      required: true, description: 'Exchange rate (1 unit of source = rate units of target)',
      sortOrder: 3, entityId: ent_4_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-4` },
    update: {},
    create: {
      id: `seed-4-0-1-4`,
      name: 'effective_date', type: 'Date',
      required: true, description: 'Date from which this rate is effective',
      sortOrder: 4, entityId: ent_4_0_1.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-1-5` },
    update: {},
    create: {
      id: `seed-4-0-1-5`,
      name: 'source', type: 'String',
      required: false, description: 'Source of the exchange rate (e.g. ECB, Bloomberg)',
      sortOrder: 5, entityId: ent_4_0_1.id,
    },
  });
  const ent_4_0_2 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Unit of Measure` } },
    update: {},
    create: {
      name: `Unit of Measure`,
      description: `=VLOOKUP(D202, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [],
      sortOrder: 2,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-2-0` },
    update: {},
    create: {
      id: `seed-4-0-2-0`,
      name: 'uom_id', type: 'String',
      required: true, description: 'Unique identifier for the unit of measure',
      sortOrder: 0, entityId: ent_4_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-2-1` },
    update: {},
    create: {
      id: `seed-4-0-2-1`,
      name: 'uom_code', type: 'String',
      required: true, description: 'Standard code for the UOM (e.g. KG, EA, L, H)',
      sortOrder: 1, entityId: ent_4_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-2-2` },
    update: {},
    create: {
      id: `seed-4-0-2-2`,
      name: 'uom_name', type: 'String',
      required: true, description: 'Full name of the UOM (e.g. Kilogram, Each, Litre)',
      sortOrder: 2, entityId: ent_4_0_2.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-2-3` },
    update: {},
    create: {
      id: `seed-4-0-2-3`,
      name: 'uom_type', type: 'Enum(Weight|Volume|Length|Each|Time|Area|Currency)',
      required: true, description: 'Physical type of the UOM',
      sortOrder: 3, entityId: ent_4_0_2.id,
    },
  });
  const ent_4_0_3 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `UOM Conversion` } },
    update: {},
    create: {
      name: `UOM Conversion`,
      description: `=VLOOKUP(D203, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [{"name":"from uom","target":"Unit of Measure","cardinality":"M:1","type":"Association","description":"Defines source UOM in a conversion"},{"name":"to uom","target":"Unit of Measure","cardinality":"M:1","type":"Association","description":"Defines target UOM in a conversion"},{"name":"item specific for","target":"Item","cardinality":"M:1","type":"Association","description":"UOM Conversion can be item-specific"}],
      sortOrder: 3,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-3-0` },
    update: {},
    create: {
      id: `seed-4-0-3-0`,
      name: 'conversion_id', type: 'String',
      required: true, description: 'Unique identifier for the UOM conversion',
      sortOrder: 0, entityId: ent_4_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-3-1` },
    update: {},
    create: {
      id: `seed-4-0-3-1`,
      name: 'from_uom_id', type: 'String',
      required: true, description: 'Source UOM',
      sortOrder: 1, entityId: ent_4_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-3-2` },
    update: {},
    create: {
      id: `seed-4-0-3-2`,
      name: 'to_uom_id', type: 'String',
      required: true, description: 'Target UOM',
      sortOrder: 2, entityId: ent_4_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-3-3` },
    update: {},
    create: {
      id: `seed-4-0-3-3`,
      name: 'conversion_factor', type: 'Decimal',
      required: true, description: 'Multiplication factor to convert from source to target UOM',
      sortOrder: 3, entityId: ent_4_0_3.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-3-4` },
    update: {},
    create: {
      id: `seed-4-0-3-4`,
      name: 'item_id', type: 'String',
      required: false, description: 'Item-specific conversion (null = global)',
      sortOrder: 4, entityId: ent_4_0_3.id,
    },
  });
  const ent_4_0_4 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Calendar` } },
    update: {},
    create: {
      name: `Calendar`,
      description: `=VLOOKUP(D198, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [],
      sortOrder: 4,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-4-0` },
    update: {},
    create: {
      id: `seed-4-0-4-0`,
      name: 'calendar_id', type: 'String',
      required: true, description: 'Unique identifier for the calendar',
      sortOrder: 0, entityId: ent_4_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-4-1` },
    update: {},
    create: {
      id: `seed-4-0-4-1`,
      name: 'calendar_name', type: 'String',
      required: true, description: 'Name of the calendar',
      sortOrder: 1, entityId: ent_4_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-4-2` },
    update: {},
    create: {
      id: `seed-4-0-4-2`,
      name: 'calendar_type', type: 'Enum(Factory|Shipping|Planning|Fiscal)',
      required: true, description: 'Type of calendar',
      sortOrder: 2, entityId: ent_4_0_4.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-4-3` },
    update: {},
    create: {
      id: `seed-4-0-4-3`,
      name: 'is_default', type: 'Boolean',
      required: false, description: 'Whether this is the default calendar for its type',
      sortOrder: 3, entityId: ent_4_0_4.id,
    },
  });
  const ent_4_0_5 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Calendar Detail` } },
    update: {},
    create: {
      name: `Calendar Detail`,
      description: `=VLOOKUP(D199, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [{"name":"part of","target":"Calendar","cardinality":"M:1","type":"Association","description":"A Calendar Detail is a day record in a Calendar"}],
      sortOrder: 5,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-5-0` },
    update: {},
    create: {
      id: `seed-4-0-5-0`,
      name: 'calendar_detail_id', type: 'String',
      required: true, description: 'Unique identifier for the calendar day record',
      sortOrder: 0, entityId: ent_4_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-5-1` },
    update: {},
    create: {
      id: `seed-4-0-5-1`,
      name: 'calendar_id', type: 'String',
      required: true, description: 'Calendar to which this day record belongs',
      sortOrder: 1, entityId: ent_4_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-5-2` },
    update: {},
    create: {
      id: `seed-4-0-5-2`,
      name: 'date', type: 'Date',
      required: true, description: 'The specific date being defined',
      sortOrder: 2, entityId: ent_4_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-5-3` },
    update: {},
    create: {
      id: `seed-4-0-5-3`,
      name: 'is_working_day', type: 'Boolean',
      required: true, description: 'Whether this date is a working day',
      sortOrder: 3, entityId: ent_4_0_5.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-5-4` },
    update: {},
    create: {
      id: `seed-4-0-5-4`,
      name: 'working_hours', type: 'Decimal',
      required: false, description: 'Number of working hours on this date',
      sortOrder: 4, entityId: ent_4_0_5.id,
    },
  });
  const ent_4_0_6 = await prisma.ontologyEntity.upsert({
    where: { subModelId_name: { subModelId: sub_4_0.id, name: `Time Bucket` } },
    update: {},
    create: {
      name: `Time Bucket`,
      description: `=VLOOKUP(D122, \'Entities & Attributes\'!$D:$E, 2, FALSE)`,
      subModelId: sub_4_0.id,
      relationships: [],
      sortOrder: 6,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-6-0` },
    update: {},
    create: {
      id: `seed-4-0-6-0`,
      name: 'time_bucket_id', type: 'String',
      required: true, description: 'Unique identifier for the time bucket',
      sortOrder: 0, entityId: ent_4_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-6-1` },
    update: {},
    create: {
      id: `seed-4-0-6-1`,
      name: 'bucket_name', type: 'String',
      required: true, description: 'Name of the time bucket (e.g. Weekly, Monthly)',
      sortOrder: 1, entityId: ent_4_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-6-2` },
    update: {},
    create: {
      id: `seed-4-0-6-2`,
      name: 'bucket_type', type: 'Enum(Day|Week|Month|Quarter|Year|Custom)',
      required: true, description: 'Granularity type of the time bucket',
      sortOrder: 2, entityId: ent_4_0_6.id,
    },
  });
  await prisma.ontologyAttribute.upsert({
    where: { id: `seed-4-0-6-3` },
    update: {},
    create: {
      id: `seed-4-0-6-3`,
      name: 'bucket_definition', type: 'String',
      required: false, description: 'Definition logic for custom buckets',
      sortOrder: 3, entityId: ent_4_0_6.id,
    },
  });

  console.log('Seed complete.');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());