import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerRecruitingSeason = {
  readonly isActive?: boolean | null;
  readonly startTimestamp?: string | null;
  readonly endTimestamp?: string | null;
}

type LazyRecruitingSeason = {
  readonly isActive?: boolean | null;
  readonly startTimestamp?: string | null;
  readonly endTimestamp?: string | null;
}

export declare type RecruitingSeason = LazyLoading extends LazyLoadingDisabled ? EagerRecruitingSeason : LazyRecruitingSeason

export declare const RecruitingSeason: (new (init: ModelInit<RecruitingSeason>) => RecruitingSeason)

type EagerBranch = {
  readonly title?: string | null;
  readonly description?: string | null;
}

type LazyBranch = {
  readonly title?: string | null;
  readonly description?: string | null;
}

export declare type Branch = LazyLoading extends LazyLoadingDisabled ? EagerBranch : LazyBranch

export declare const Branch: (new (init: ModelInit<Branch>) => Branch)

type EagerClubs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clubs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly abbreviation?: string | null;
  readonly description?: string | null;
  readonly profilePhoto?: string | null;
  readonly headingPhoto?: string | null;
  readonly isApplicationOpen?: boolean | null;
  readonly isApplicationRequired?: boolean | null;
  readonly categories?: (string | null)[] | null;
  readonly numMembers?: number | null;
  readonly yearFounded?: string | null;
  readonly branches?: (Branch | null)[] | null;
  readonly website?: string | null;
  readonly instagram?: string | null;
  readonly linkedin?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly discord?: string | null;
  readonly email?: string | null;
  readonly recruitingSeasons?: RecruitingSeason | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClubs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clubs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly abbreviation?: string | null;
  readonly description?: string | null;
  readonly profilePhoto?: string | null;
  readonly headingPhoto?: string | null;
  readonly isApplicationOpen?: boolean | null;
  readonly isApplicationRequired?: boolean | null;
  readonly categories?: (string | null)[] | null;
  readonly numMembers?: number | null;
  readonly yearFounded?: string | null;
  readonly branches?: (Branch | null)[] | null;
  readonly website?: string | null;
  readonly instagram?: string | null;
  readonly linkedin?: string | null;
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly discord?: string | null;
  readonly email?: string | null;
  readonly recruitingSeasons?: RecruitingSeason | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Clubs = LazyLoading extends LazyLoadingDisabled ? EagerClubs : LazyClubs

export declare const Clubs: (new (init: ModelInit<Clubs>) => Clubs) & {
  copyOf(source: Clubs, mutator: (draft: MutableModel<Clubs>) => MutableModel<Clubs> | void): Clubs;
}