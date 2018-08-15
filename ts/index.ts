export type BackYardCondition
= 'Fully Landscaped'
| 'Needs work'
| 'No Yard'
| 'Partially Landscaped'
;

export type GenericCondition
= 'Brand New'
| 'brand_new'
| 'Fully Upgraded'
| 'fully_upgraded'
| 'Great Condition'
| 'great_condition'
| 'Heavily Worn'
| 'heavily_worn'
| 'Needs Work'
| 'needs_work'
| 'No upgrades'
| 'no_upgrades'
| 'Typical Use'
| 'typical_use'
| 'Upgraded'
| 'upgraded'
;

export type BathroomCondition = GenericCondition;

export type DwellingType
= 'apartment'
| 'single-family'
| 'townhouse'
| 'unknown'
;

export type FlooringCondition = GenericCondition;

export type FlooringFloorType
= 'carpet'
| 'hardwood'
| 'laminate'
| 'other'
| 'tile'
;

export type HOAFrequency
= 'Annually'
| 'Monthly'
| 'Quarterly'
| 'Semi-Annually'
;

export type InteriorPaintCondition
= 'great_condition'
| 'needs_work'
| 'typical_use'
;

export type KitchenApplianceType
= 'Black'
| 'Mixed'
| 'other'
| 'Stainless Steel'
| 'White'
;

export type KitchenCondition = GenericCondition;

export type KitchenCounterType
= 'corian'
| 'formica'
| 'Granite'
| 'granite_slab'
| 'granite_tile'
| 'other'
| 'Other/Unknown'
| 'other_tile'
| 'quartz'
| 'Tile'
;

export type MarketName
= 'atlanta'
| 'charlotte'
| 'dallas'
| 'houston'
| 'las_vegas'
| 'minneapolis'
| 'nashville'
| 'orlando'
| 'phoenix'
| 'raleigh'
| 'san_antonio'
| 'tampa'
;

export type ProductType
= 'listed'
| 'prelist'
| 'direct seller'
;

export type RoofType
= 'composition'
| 'other'
| 'shingle'
| 'tile'
;

export type StateCode = ('AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'GU' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY');

export interface AuctionedProperty {
    amount_usd?: string;
    apn?: string;
    avm_lower_bound?: number;
    avm_upper_bound?: number;
    back_yard_condition?: BackYardCondition;
    bathrooms?: number;
    bathroom_condition?: BathroomCondition;
    bathroom_features_double_sink?: boolean;
    bathroom_features_granite_countertops?: boolean;
    bathroom_features_separate_shower_tub?: boolean;
    bathroom_features_updated_tile_floors?: boolean;
    bedrooms?: number;
    city?: string;
    dwelling_type?: DwellingType;
    eligibility_criteria_gated_community?: boolean;
    end_date?: Date | string;
    estimated_current_yield?: number;
    flooring_condition?: FlooringCondition;
    flooring_floor_type?: FlooringFloorType;
    floors?: number;
    guidance_price?: number;
    hoa_fee_cents?: number;
    hoa_frequency?: HOAFrequency;
    hoa_name?: string;
    hoa_rules?: string;
    inside_maps?: string;
    interior_paint_condition?: InteriorPaintCondition;
    interior_sq_ft?: number;
    is_coming_soon?: boolean;
    kitchen_appliance_type?: KitchenApplianceType;
    kitchen_condition?: KitchenCondition;
    kitchen_counter_type?: KitchenCounterType;
    kitchen_features_kitchen_island?: boolean;
    kitchen_features_new_cabinets?: boolean;
    kitchen_features_tile_backsplash?: boolean;
    lot_sq_ft?: number;
    market_name?: MarketName;
    opendoor_listing_link?: string;
    other_information?: string;
    parking?: number;
    photo_url?: string;
    price_listing_last?: number;
    private_pool?: boolean;
    product_type?: ProductType;
    property_taxes?: number;
    roof_type?: RoofType;
    school_district_elementary?: string;
    school_district_high?: string;
    sherlock_assessment?: string;
    state?: StateCode;
    street_address?: string;
    token?: string;
    unit?: string;
    year_built?: number;
    zip_code?: string;
}

export interface Bid {
    token: string;
    amount_usd: number;
    street_address?: string;
}

export type Bids = Bid[];

export interface BidResult {
    new_bid_count: number;
    updated_bid_count: number;
}