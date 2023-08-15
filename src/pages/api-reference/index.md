---
outline: deep
---

# API reference

### Requests
  * data
  * query_params
  * parsers
  * accepted_renderer
  * accepted_media_type
  * user
  * auth
  * authenticators
  * method
  * content_type
  * stream
  * META
  * session
### Responses
  * data
  * status_code
  * content
  * template_name
  * accepted_renderer
  * accepted_media_type
  * renderer_context
### Views
  * @api_view()
  * @renderer_classes()
  * @parser_classes()
  * @authentication_classes()
  * @throttle_classes()
  * @permission_classes()
  * permission_classes
  * authentication_classes
  * renderer_classes
  * parser_classes
  * throttle_classes
  * content_negotiation_class
  * get_renderers()
  * get_parsers()
  * get_authenticators()
  * get_throttles()
  * get_permissions()
  * get_content_negotiator()
  * get_exception_handler()
  * check_permissions()
  * check_throttles()
  * perform_content_negotiation()
  * initial()
  * handle_exception()
  * initialize_request()
  * finalize_response()
### Generic views
  * CreateAPIView
  * ListAPIView
  * RetrieveAPIView
  * UpdateAPIView
  * DestroyAPIView
  * queryset
  * serializer_class
  * permission_classes
  * pagination_class
  * filter_backends
  * lookup_field
  * lookup_url_kwarg
  * get_queryset()
  * get_object()
  * get_serializer_class()
  * get_serializer_context()
  * get_serializer()
  * get_paginated_response()
  * paginate_queryset()
  * filter_queryset()
  * list()
  * create()
  * retrieve()
  * update()
  * destroy()
### ViewSets
  * ViewSet
  * GenericViewSet
  * ModelViewSet
  * ReadOnlyModelViewSet