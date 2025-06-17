var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

var datasetKeys = [
    "1fe5d5cd-0336-4664-b768-d38acf349c0a",
    "97367d97-2b0c-4895-aee7-070f9bb42e5a",
    "3bef6fb2-9a1f-4d8d-b5f3-d6d23885905c",
    "e51b8857-2ad1-4701-a276-f0cd1f4cc6a5",
    "2a337d5a-a784-4f8a-a947-46d69e0fa3eb",
    "2618e878-7e19-412d-99e3-f12a8aa23ebb",
    "94dce9c1-e2f0-45cb-a77b-8e5caa871a41",
    "75bcbf8f-5e58-4714-9eba-382129702022",
    "cf8f886b-7289-4d59-9cb1-f2d293147d98",
    "bc2c3c27-97b6-473e-abe0-6f8478b3e2f8",
    "9c2d26f1-0ce0-4cde-9f8d-de8284404fff",
    "94687f6b-6723-46a3-90d8-5a06b843291c"
];

var institutionKeys = [
    'c8600560-0b5f-4e49-abf0-4812643c47b4',
];

var siteConfig = {
    "version": 3,
    "pages": [
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "collectionSearch"
        },
        {
            "id": "collectionKey"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "literatureSearch"
        }
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE",
        "COLLECTION",
        "LITERATURE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": "#001972",
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        },
        {
            "code": "da",
            "localeCode": "da",
            "label": "Dansk",
            "default": false,
            "textDirection": "ltr",
            "iso3LetterCode": "dan",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            "type": "in",
            "key": "datasetKey",
            "values": datasetKeys
        },
        "highlightedFilters": [
            "taxonKey",
            "verbatimScientificName",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            "recordedBy",
            "identifiedBy"
        ],
        "excludedFilters": [
            "occurrenceStatus",
            "networkKey",
            "hostingOrganizationKey",
            "protocol",
            "publishingCountry",
            "publishingOrg",
            "institutionCode",
            "collectionCode"
        ],
        "defaultEnabledTableColumns": [
            "features",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            "country",
            "year",
            "recordedBy",
            "identifiedBy"
        ],
        "availableTableColumns": [
            "scientificName",
            "commonName",
            "features",
            "media",
            "country",
            "coordinates",
            "year",
            "eventDate",
            "basisOfRecord",
            "dataset",
            "catalogNumber",
            "recordedBy",
            "identifiedBy",
            "recordNumber",
            "typeStatus",
            "preparations",
            "collectionCode",
            "collectionKey",
            "locality",
            "fieldNumber",
            "individualCount",
            "higherGeography",
            "stateProvince",
            "establishmentMeans",
            "sex",
            "lifeStage",
            "iucnRedListCategory"
        ],
        "tabs": [
            "table",
            "gallery",
            "map",
            "clusters",
            "dashboard",
            "download"
        ],
        "mapSettings": {
            "lat": 52,
            "lng": 12,
            "zoom": 4.911544076366507
        }
    },
    "collectionSearch": {
        excludedFilters: ['country', 'active'],
        // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            institutionKey: institutionKeys,
            active: true
        },
    },
    "institutionSearch": {},
    "datasetSearch": {

    },
    "publisherSearch": {},
    "literatureSearch": {
        "scope": {
            "type": "in",
            "key": "gbifDatasetKey",
            "values": datasetKeys
        }
    }
}