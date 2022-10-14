export class Constants {
    /* PRIVACY POLICY AND TERMS & CONDITIONS URLs */
    public static get PRIVACY_POLICY_URL(): string { return ''; }

    public static get TERMS_AND_CONDITIONS_URL(): string { return ''; }


    /* CAROUSEL STEP SIMULATION */
    public static get CAROUSEL_DEFAULT_INCREMENTATION_STEP(): number { return 3; }

    public static get CAROUSEL_DEFAULT_START_OFFSET(): number { return 0; }

    public static get CAROUSEL_DEFAULT_END_OFFSET(): number { return 3; }

    /* CATALOGUE FILTER PARAM */
    public static get CATALOGUE_FILTER_PARAM(): string { return 'filter'; }

    /* SERVICE EXPIRATION DAYS */
    public static get SERVICE_EXPIRATION_DAYS(): number { return 21; }

    /* WORKBENCH SIMULATED URL */
    public static get WORKBENCH_URL(): string { return ''; }

    /* VERSIONING */
    public static get VERSION_PATTERN(): string { return '^([0-9]+)[.]([0-9]+)[.]([0-9]+)$'; }

    public static get VERSION_DEFAULT_LEVEL_TO_INCREMENT(): string { return 'PATCH'; }

    public static get VERSION_DEFAULT_INITIAL_SEMANTIC_VERSION(): string { return '1.0.0'; }

    public static get VERSION_DEFAULT_INCREMENTATION_STEP(): number { return 1; }

    public static get VERSION_LEVEL_MAJOR(): string { return 'MAJOR'; }

    public static get VERSION_LEVEL_MINOR(): string { return 'MINOR'; }

    public static get VERSION_LEVEL_PATCH(): string { return 'PATCH'; }

    /* TOOLTIP POSITIONS */
    public static get POSITION_ABOVE(): string { return 'above'; }

    public static get POSITION_BELOW(): string { return 'below'; }

    public static get POSITION_LEFT(): string { return 'left'; }

    public static get POSITION_RIGHT(): string { return 'right'; }

    /* LEARNER MODE LABEL */
    public static get LEARNER_MODE(): string { return 'learner_mode'; }
}
