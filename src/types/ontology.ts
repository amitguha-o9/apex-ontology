export type UserRole = 'VIEWER' | 'EDITOR' | 'ADMIN';

export interface OntologyAttribute {
  id: string;
  name: string;
  type: string;
  required: boolean;
  description: string | null;
  notes: string | null;
  sortOrder: number;
}

export interface OntologyRelationship {
  name: string;
  target: string;
  cardinality: string;
  type: string;
  description?: string;
}

export interface OntologyEntity {
  id: string;
  name: string;
  description: string | null;
  modelType: string | null;
  relationships: OntologyRelationship[];
  attributes: OntologyAttribute[];
  sortOrder: number;
  subModelId: string;
  updatedAt: string;
}

export interface OntologySubModel {
  id: string;
  name: string;
  modelId: string;
  sortOrder: number;
  entities: OntologyEntity[];
}

export interface OntologyModel {
  id: string;
  name: string;
  description: string | null;
  color: string;
  sortOrder: number;
  subModels: OntologySubModel[];
}

// Slim versions for sidebar / list rendering (no attributes)
export type EntitySummary = Pick<OntologyEntity, 'id' | 'name' | 'description' | 'subModelId'> & {
  _count: { attributes: number; };
  relationshipCount: number;
};
