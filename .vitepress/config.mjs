import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DRF documentation",
    description: "Django Rest Framework documentation in Uzbek language",
    srcDir: "src/pages/",
    head: [
        ['link', {rel: 'icon', href: 'https://www.django-rest-framework.org/img/favicon.ico'}],
    ],
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/get-started/introduction'}
        ],

        sidebar: [
            {
                text: 'Get started',
                items: [
                    {text: 'Introduction', link: '/get-started/introduction'},
                    {text: 'Installation', link: '/get-started/installation'}
                ]
            },
            {
                text: 'Essentials',
                items: [
                    {text: 'Requests', link: '/essentials/requests'},
                    {text: 'Responses', link: '/essentials/responses'},
                    {text: 'Views', link: '/essentials/views'},
                    {text: 'Generic views', link: '/essentials/generic-views'},
                    {text: 'ViewSets', link: '/essentials/view-sets'},
                    {text: 'Routers', link: '/essentials/routers'},
                    {text: 'Parsers', link: '/essentials/parsers'},
                    {text: 'Renderers', link: '/essentials/renderers'},
                    {text: 'Serializers', link: '/essentials/serializers'},
                    {text: 'Validators', link: '/essentials/validators'},
                    {text: 'Authentication', link: '/essentials/authentication'},
                    {text: 'Caching', link: '/essentials/caching'},
                    {text: 'Throttling', link: '/essentials/throttling'},
                    {text: 'Filtering', link: '/essentials/filtering'},
                    {text: 'Pagination', link: '/essentials/pagination'},
                    {text: 'Versioning', link: '/essentials/versioning'},
                    {text: 'Content negotiation', link: '/essentials/content-negotiation'},
                    {text: 'Metadata', link: '/essentials/metadata'},
                    {text: 'Schema', link: '/essentials/schema'},
                    {text: 'Format suffixes', link: '/essentials/format-suffixes'},
                    {text: 'Returning URLs', link: '/essentials/returning-urls'},
                    {text: 'Exceptions', link: '/essentials/exceptions'},
                    {text: 'Status Codes', link: '/essentials/status-codes'},
                    {text: 'Testing', link: '/essentials/testing'},
                    {text: 'Settings', link: '/essentials/settings'},
                ]
            },
            {
                text: 'Advanced', link: '/advanced/',
                items: [
                    {
                        text: 'ViewSets', link: '/advanced/view-sets/', collapsed: true,
                        items: [
                            {
                                text: 'Custom ViewSet base classes',
                                link: '/advanced/parsers/custom-view-set-base-classes'
                            }
                        ]
                    },
                    {
                        text: 'Routers', link: '/advanced/routers/', collapsed: true,
                        items: [
                            {text: 'Customizing dynamic routes', link: '/advanced/routers/customizing-dynamic-routes'}
                        ]
                    },
                    {
                        text: 'Parsers', link: '/advanced/parsers/', collapsed: true,
                        items: [
                            {text: 'Custom parser', link: '/advanced/parsers/custom-parser'}
                        ]
                    },
                    {
                        text: 'Renderers', link: '/advanced/renderers/', collapsed: true,
                        items: [
                            {text: 'Custom renderer', link: '/advanced/renderers/custom-renderer'}
                        ]
                    },
                    {
                        text: 'Permissions', link: '/advanced/permissions/', collapsed: true,
                        items: [
                            {text: 'Custom permission', link: '/advanced/permissions/custom-permission'}
                        ]
                    },
                    {
                        text: 'Throttles', link: '/advanced/throttles/', collapsed: true,
                        items: [
                            {text: 'Custom throttles', link: '/advanced/throttles/custom-throttles'}
                        ]
                    },
                    {
                        text: 'Filtering', link: '/advanced/filtering/', collapsed: true,
                        items: [
                            {text: 'Custom generic filtering', link: '/advanced/filtering/custom-generic-filtering'}
                        ]
                    },
                    {
                        text: 'Pagination', link: '/advanced/pagination/', collapsed: true,
                        items: [
                            {
                                text: 'Customize pagination styles',
                                link: '/advanced/pagination/customize-pagination-styles'
                            }
                        ]
                    },
                    {
                        text: 'Versioning', link: '/advanced/versioning/', collapsed: true,
                        items: [
                            {text: 'Custom versioning schemes', link: '/advanced/versioning/custom-versioning-schemes'}
                        ]
                    }
                ]
            },
            {
                text: 'API Reference', link: '/api-reference/',
                items: [
                    {
                        text: 'Requests', link: '/api-reference/requests/', collapsed: true,
                        items: [
                            {text: 'data', link: '/api-reference/requests/data'},
                            {text: 'query_params', link: '/api-reference/requests/query_params'},
                            {text: 'parsers', link: '/api-reference/requests/parsers'},
                            {text: 'accepted_renderer', link: '/api-reference/requests/accepted_renderer'},
                            {text: 'accepted_media_type', link: '/api-reference/requests/accepted_media_type'},
                            {text: 'user', link: '/api-reference/requests/user'},
                            {text: 'auth', link: '/api-reference/requests/auth'},
                            {text: 'authenticators', link: '/api-reference/requests/authenticators'},
                            {text: 'method', link: '/api-reference/requests/method'},
                            {text: 'content_type', link: '/api-reference/requests/content_type'},
                            {text: 'stream', link: '/api-reference/requests/stream'},
                            {text: 'META', link: '/api-reference/requests/META'},
                            {text: 'session', link: '/api-reference/requests/session'},
                        ]
                    },
                    {
                        text: 'Responses', link: '/api-reference/responses/', collapsed: true,
                        items: [
                            {text: 'data', link: '/api-reference/responses/data'},
                            {text: 'status_code', link: '/api-reference/responses/status_code'},
                            {text: 'content', link: '/api-reference/responses/content'},
                            {text: 'template_name', link: '/api-reference/responses/template_name'},
                            {text: 'accepted_renderer', link: '/api-reference/responses/accepted_renderer'},
                            {text: 'accepted_media_type', link: '/api-reference/responses/accepted_media_type'},
                            {text: 'renderer_context', link: '/api-reference/responses/renderer_context'},
                        ]
                    },
                    {
                        text: 'Views', link: '/api-reference/views/', collapsed: true,
                        items: [
                            {text: '@api_view', link: '/api-reference/views/api-view'},
                            {text: 'APIView', link: '/api-reference/views/api-view-class'},
                            {text: 'renderer_classes', link: '/api-reference/views/renderer-classes'},
                            {text: 'parser_classes', link: '/api-reference/views/parser-classes'},
                            {text: 'authentication_classes', link: '/api-reference/views/authentication-classes'},
                            {text: 'throttle_classes', link: '/api-reference/views/throttle-classes'},
                            {text: 'permission_classes', link: '/api-reference/views/permission-classes'},
                            {text: 'content_negotiation_class', link: '/api-reference/views/content-negotiation-class'},
                            {text: 'get_renderers()', link: '/api-reference/views/get-renderers'},
                            {text: 'get_parsers()', link: '/api-reference/views/get-parsers'},
                            {text: 'get_authenticators()', link: '/api-reference/views/get-authenticators'},
                            {text: 'get_throttles()', link: '/api-reference/views/get-throttles'},
                            {text: 'get_content_negotiator()', link: '/api-reference/views/get-content-negotiator'},
                            {text: 'check_permissions()', link: '/api-reference/views/check-permissions'},
                            {text: 'check_throttles()', link: '/api-reference/views/check-throttles'},
                            {
                                text: 'perform_content_negotiation()',
                                link: '/api-reference/views/perform-content-negotiation'
                            },
                            {text: 'initial()', link: '/api-reference/views/initial'},
                            {text: 'handle_exception()', link: '/api-reference/views/handle-exception'},
                            {text: 'initialize_request()', link: '/api-reference/views/initialize-request'},
                            {text: 'finalize_response()', link: '/api-reference/views/finalize-response'}
                        ]
                    },
                    {
                        text: 'Generic views', link: '/api-reference/generic-views/', collapsed: true,
                        items: [
                            {text: 'CreateAPIView', link: '/api-reference/generic-views/createapiview'},
                            {text: 'ListAPIView', link: '/api-reference/generic-views/listapiview'},
                            {text: 'RetrieveAPIView', link: '/api-reference/generic-views/retrieveapiview'},
                            {text: 'UpdateAPIView', link: '/api-reference/generic-views/updateapiview'},
                            {text: 'DestroyAPIView', link: '/api-reference/generic-views/destroyapiview'},
                            {text: 'queryset', link: '/api-reference/generic-views/queryset'},
                            {text: 'serializer_class', link: '/api-reference/generic-views/serializer_class'},
                            {text: 'permission_classes', link: '/api-reference/generic-views/permission_classes'},
                            {text: 'pagination_class', link: '/api-reference/generic-views/pagination-class'},
                            {text: 'filter_backends', link: '/api-reference/generic-views/filter-backends'},
                            {text: 'lookup_field', link: '/api-reference/generic-views/lookup-field'},
                            {text: 'lookup_url_kwarg', link: '/api-reference/generic-views/lookup-url-kwarg'},
                            {text: 'get_queryset()', link: '/api-reference/generic-views/get-queryset'},
                            {text: 'get_object()', link: '/api-reference/generic-views/get-object'},
                            {text: 'get_serializer_class()', link: '/api-reference/generic-views/get-serializer-class'},
                            {
                                text: 'get_serializer_context()',
                                link: '/api-reference/generic-views/get-serializer-context'
                            },
                            {text: 'get_serializer()', link: '/api-reference/generic-views/get-serializer'},
                            {
                                text: 'get_paginated_response()',
                                link: '/api-reference/generic-views/get-paginated-response'
                            },
                            {text: 'paginate_queryset()', link: '/api-reference/generic-views/paginate-queryset'},
                            {text: 'filter_queryset()', link: '/api-reference/generic-views/filter-queryset'},
                            {text: 'list()', link: '/api-reference/generic-views/list'},
                            {text: 'create()', link: '/api-reference/generic-views/create'},
                            {text: 'retrieve()', link: '/api-reference/generic-views/retrieve'},
                            {text: 'update()', link: '/api-reference/generic-views/update'},
                            {text: 'destroy()', link: '/api-reference/generic-views/destroy'},
                        ]
                    },
                    {
                        text: 'ViewSets', link: '/api-reference/view-sets/', collapsed: true,
                        items: [
                            {text: 'ViewSet', link: '/api-reference/view-sets/view-set'},
                            {text: 'GenericViewSet', link: '/api-reference/view-sets/generic-view-set'},
                            {text: 'ModelViewSet', link: '/api-reference/view-sets/model-view-set'},
                            {text: 'ReadOnlyModelViewSet', link: '/api-reference/view-sets/read-only-model-view-set'},
                        ]
                    },
                    {
                        text: 'Routers', link: '/api-reference/routers/', collapsed: true,
                        items: [
                            {text: 'SimpleRouter', link: '/api-reference/routers/simple-router'},
                            {text: 'DefaultRouter', link: '/api-reference/routers/default-router'},
                        ]
                    },
                    {
                        text: 'Parsers', link: '/api-reference/parsers/', collapsed: true,
                        items: [
                            {text: 'JSONParser', link: '/api-reference/routers/json-parser'},
                            {text: 'FormParser', link: '/api-reference/routers/form-parser'},
                            {text: 'MultiPartParser', link: '/api-reference/routers/multi-part-parser'},
                            {text: 'FileUploadParser', link: '/api-reference/routers/file-upload-parser'},
                            {text: 'stream', link: '/api-reference/routers/stream'},
                            {text: 'media_type', link: '/api-reference/routers/media-type'},
                            {text: 'parser_context', link: '/api-reference/routers/parser-context'},
                        ]
                    },
                    {
                        text: 'Renderers', link: '/api-reference/renderers/', collapsed: true,
                        items: [
                            {text: 'JSONRenderer', link: '/api-reference/renderers/json-renderer'},
                            {text: 'TemplateHTMLRenderer', link: '/api-reference/renderers/template-html-renderer'},
                            {text: 'StaticHTMLRenderer', link: '/api-reference/renderers/static-html-renderer'},
                            {text: 'BrowsableAPIRenderer', link: '/api-reference/renderers/browsable-api-renderer'},
                            {text: 'HTMLFormRenderer', link: '/api-reference/renderers/html-form-renderer'},
                            {text: 'MultiPartRenderer', link: '/api-reference/renderers/multi-part-renderer'},
                        ]
                    },
                    {
                        text: 'Serializers', link: '/api-reference/serializers/', collapsed: true
                    },
                    {
                        text: 'Validators', link: '/api-reference/validators/', collapsed: true,
                        items: [
                            {text: 'UniqueValidator', link: '/api-reference/validators/unique-validator'},
                            {
                                text: 'UniqueTogetherValidator',
                                link: '/api-reference/validators/unique-together-validator'
                            },
                            {
                                text: 'UniqueForDateValidator',
                                link: '/api-reference/validators/unique-for-date-validator'
                            },
                            {
                                text: 'UniqueForMonthValidator',
                                link: '/api-reference/validators/unique-for-month-validator'
                            },
                            {
                                text: 'UniqueForYearValidator',
                                link: '/api-reference/validators/unique-for-year-validator'
                            },
                        ]
                    },
                    {
                        text: 'Authentication', link: '/api-reference/authentication/', collapsed: true,
                        items: [
                            {text: 'BasicAuthentication', link: '/api-reference/authentication/basic-authentication'},
                            {text: 'TokenAuthentication', link: '/api-reference/authentication/token-authentication'},
                            {
                                text: 'SessionAuthentication',
                                link: '/api-reference/authentication/session-authentication'
                            },
                            {
                                text: 'RemoteUserAuthentication',
                                link: '/api-reference/authentication/remote-user-authentication'
                            },
                        ]
                    },
                    {
                        text: 'Permissions', link: '/api-reference/permissions/', collapsed: true,
                        items: [
                            {text: 'AllowAny', link: '/api-reference/permissions/allow-any'},
                            {text: 'IsAuthenticated', link: '/api-reference/permissions/is-authenticated'},
                            {text: 'IsAdminUser', link: '/api-reference/permissions/is-admin-user'},
                            {
                                text: 'IsAuthenticatedOrReadOnly',
                                link: '/api-reference/permissions/is-authenticated-or-read-only'
                            },
                            {
                                text: 'DjangoModelPermissions',
                                link: '/api-reference/permissions/django-model-permissions'
                            },
                            {
                                text: 'DjangoModelPermissionsOrAnonReadOnly',
                                link: '/api-reference/permissions/django-model-permissions-or-anon-read-only'
                            },
                            {
                                text: 'DjangoObjectPermissions',
                                link: '/api-reference/permissions/django-object-permissions'
                            },
                        ]
                    },
                    {
                        text: 'Caching', link: '/api-reference/caching/', collapsed: true
                    },
                    {
                        text: 'Throttling', link: '/api-reference/throttling/', collapsed: true,
                        items: [
                            {text: 'AnonRateThrottle', link: '/api-reference/throttling/anon-rate-throttle'},
                            {text: 'UserRateThrottle', link: '/api-reference/throttling/user-rate-throttle'},
                            {text: 'ScopedRateThrottle', link: '/api-reference/throttling/scoped-rate-throttle'},
                        ]
                    },
                    {
                        text: 'Filtering', link: '/api-reference/filtering/', collapsed: true,
                        items: [
                            {text: 'SearchFilter', link: '/api-reference/filtering/search-filter'},
                            {text: 'OrderingFilter', link: '/api-reference/filtering/ordering-filter'},
                            {text: 'DjangoFilterBackend', link: '/api-reference/filtering/django-filter-backend'},
                        ]
                    },
                    {
                        text: 'Pagination', link: '/api-reference/pagination/', collapsed: true,
                        items: [
                            {text: 'PageNumberPagination', link: '/api-reference/pagination/page-number-pagination'},
                            {text: 'LimitOffsetPagination', link: '/api-reference/pagination/limit-offset-pagination'},
                            {text: 'CursorPagination', link: '/api-reference/pagination/cursor-pagination'},
                        ]
                    },
                    {
                        text: 'Versioning', link: '/api-reference/versioning/', collapsed: true,
                        items: [
                            {
                                text: 'AcceptHeaderVersioning',
                                link: '/api-reference/versioning/accept-header-versioning'
                            },
                            {text: 'URLPathVersioning', link: '/api-reference/versioning/url-path-versioning'},
                            {text: 'NamespaceVersioning', link: '/api-reference/versioning/namespace-versioning'},
                            {text: 'HostNameVersioning', link: '/api-reference/versioning/host-name-versioning'},
                            {
                                text: 'QueryParameterVersioning',
                                link: '/api-reference/versioning/query-parameter-versioning'
                            },
                        ]
                    },
                    {
                        text: 'Returning URLs', link: '/api-reference/returning-urls/', collapsed: true,
                        items: [
                            {text: 'reverse', link: '/api-reference/returning-urls/reverse'},
                            {text: 'reverse_lazy', link: '/api-reference/returning-urls/reverse-lazy'}
                        ]
                    },
                    {
                        text: 'Exceptions', link: '/api-reference/exceptions/', collapsed: true,
                        items: [
                            {text: 'APIException', link: '/api-reference/exceptions/api-exception'},
                            {text: 'ParseError', link: '/api-reference/exceptions/parse-error'},
                            {text: 'AuthenticationFailed', link: '/api-reference/exceptions/authentication-failed'},
                            {text: 'NotAuthenticated', link: '/api-reference/exceptions/not-authenticated'},
                            {text: 'PermissionDenied', link: '/api-reference/exceptions/permission-denied'},
                            {text: 'NotFound', link: '/api-reference/exceptions/not-found'},
                            {text: 'MethodNotAllowed', link: '/api-reference/exceptions/method-not-allowed'},
                            {text: 'NotAcceptable', link: '/api-reference/exceptions/not-acceptable'},
                            {text: 'UnsupportedMediaType', link: '/api-reference/exceptions/unsupported-media-type'},
                            {text: 'Throttled', link: '/api-reference/exceptions/throttled'},
                            {text: 'ValidationError', link: '/api-reference/exceptions/validation-error'},
                            {text: 'server_error', link: '/api-reference/exceptions/server-error'},
                            {text: 'bad_request', link: '/api-reference/exceptions/bad-request'},
                        ]
                    },
                    {
                        text: 'Testing', link: '/api-reference/testing/', collapsed: true,
                        items: [
                            {text: 'APIRequestFactory', link: '/api-reference/testing/api-request-factory'},
                            {text: 'APIClient', link: '/api-reference/testing/api-client'},
                            {text: 'RequestsClient', link: '/api-reference/testing/requests-client'},
                            {text: 'CoreAPIClient', link: '/api-reference/testing/core-api-client'},
                            {text: 'APISimpleTestCase', link: '/api-reference/testing/api-simple-test-case'},
                            {text: 'APITransactionTestCase', link: '/api-reference/testing/api-transaction-test-case'},
                            {text: 'APITestCase', link: '/api-reference/testing/api-test-case'},
                            {text: 'APILiveServerTestCase', link: '/api-reference/testing/api-live-server-test-case'},
                            {text: 'URLPatternsTestCase', link: '/api-reference/testing/url-patterns-test-case'},
                        ]
                    },
                    {
                        text: 'Settings', link: '/api-reference/settings/', collapsed: true,
                        items: [
                            {
                                text: 'DEFAULT_RENDERER_CLASSES',
                                link: '/api-reference/settings/default-renderer-classes'
                            },
                            {text: 'DEFAULT_PARSER_CLASSES', link: '/api-reference/settings/default-parser-classes'},
                            {
                                text: 'DEFAULT_AUTHENTICATION_CLASSES',
                                link: '/api-reference/settings/default-authentication-classes'
                            },
                            {
                                text: 'DEFAULT_PERMISSION_CLASSES',
                                link: '/api-reference/settings/default-permission-classes'
                            },
                            {
                                text: 'DEFAULT_THROTTLE_CLASSES',
                                link: '/api-reference/settings/default-throttle-classes'
                            },
                            {
                                text: 'DEFAULT_CONTENT_NEGOTIATION_CLASS',
                                link: '/api-reference/settings/default-content-negotiation-class'
                            },
                            {text: 'DEFAULT_SCHEMA_CLASS', link: '/api-reference/settings/default-schema-class'},
                            {text: 'DEFAULT_FILTER_BACKENDS', link: '/api-reference/settings/default-filter-backends'},
                            {
                                text: 'DEFAULT_PAGINATION_CLASS',
                                link: '/api-reference/settings/default-pagination-class'
                            },
                            {text: 'PAGE_SIZE', link: '/api-reference/settings/page-size'},
                            {text: 'SEARCH_PARAM', link: '/api-reference/settings/search-param'},
                            {text: 'ORDERING_PARAM', link: '/api-reference/settings/ordering-param'},
                            {text: 'DEFAULT_VERSION', link: '/api-reference/settings/default-version'},
                            {text: 'ALLOWED_VERSIONS', link: '/api-reference/settings/allowed-versions'},
                            {text: 'VERSION_PARAM', link: '/api-reference/settings/version-param'},
                            {text: 'UNAUTHENTICATED_USER', link: '/api-reference/settings/unauthenticated-user'},
                            {text: 'UNAUTHENTICATED_TOKEN', link: '/api-reference/settings/unauthenticated-token'},
                            {
                                text: 'TEST_REQUEST_DEFAULT_FORMAT',
                                link: '/api-reference/settings/test-request-default-format'
                            },
                            {
                                text: 'TEST_REQUEST_RENDERER_CLASSES',
                                link: '/api-reference/settings/test-request-renderer-classes'
                            },
                            {text: 'SCHEMA_COERCE_PATH_PK', link: '/api-reference/settings/scheme-coerce-path-pk'},
                            {
                                text: 'SCHEMA_COERCE_METHOD_NAMES',
                                link: '/api-reference/settings/scheme-coerce-method-names'
                            },
                            {text: 'URL_FORMAT_OVERRIDE', link: '/api-reference/settings/url-format-override'},
                            {text: 'FORMAT_SUFFIX_KWARG', link: '/api-reference/settings/format-suffix-kwarg'},
                            {text: 'DATETIME_FORMAT', link: '/api-reference/settings/datetime-format'},
                            {text: 'DATETIME_INPUT_FORMATS', link: '/api-reference/settings/datetime-input-formats'},
                            {text: 'DATE_FORMAT', link: '/api-reference/settings/date-format'},
                            {text: 'DATE_INPUT_FORMATS', link: '/api-reference/settings/date-input-formats'},
                            {text: 'TIME_FORMAT', link: '/api-reference/settings/time-format'},
                            {text: 'TIME_INPUT_FORMATS', link: '/api-reference/settings/time-input-formats'},
                            {text: 'UNICODE_JSON', link: '/api-reference/settings/unicode-json'},
                            {text: 'COMPACT_JSON', link: '/api-reference/settings/compact-json'},
                            {text: 'STRICT_JSON', link: '/api-reference/settings/strict-json'},
                            {
                                text: 'COERCE_DECIMAL_TO_STRING',
                                link: '/api-reference/settings/coerce-decimal-to-string'
                            },
                            {text: 'VIEW_NAME_FUNCTION', link: '/api-reference/settings/view-name-function'},
                            {
                                text: 'VIEW_DESCRIPTION_FUNCTION',
                                link: '/api-reference/settings/view-description-function'
                            },
                            {text: 'HTML_SELECT_CUTOFF', link: '/api-reference/settings/html-select-cutoff'},
                            {text: 'HTML_SELECT_CUTOFF_TEXT', link: '/api-reference/settings/html-select-cutoff-text'},
                            {text: 'EXCEPTION_HANDLER', link: '/api-reference/settings/exception-handler'},
                            {text: 'NON_FIELD_ERRORS_KEY', link: '/api-reference/settings/non-field-errors-key'},
                            {text: 'URL_FIELD_NAME', link: '/api-reference/settings/url-field-name'},
                            {text: 'NUM_PROXIES', link: '/api-reference/settings/num-proxies'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/documentation-uz/django-rest-framework'}
        ]
    }
})
