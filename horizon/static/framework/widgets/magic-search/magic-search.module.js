/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name MagicSearch
   * @description
   *
   * # MagicSearch
   *
   * The `MagicSearch` module provides support faceted search. This is
   * used with the Eucalyptus third-party MagicSearch module at
   * https://github.com/eucalyptus/magic-search.
   *
   * | Directives                                                        |
   * |-------------------------------------------------------------------|
   * | {@link MagicSearch.directive:hzMagicSearchBar `hzMagicSearchBar`} |
   * | {@link MagicSearch.directive:magicOverrides `magicOverrides`}     |
   * | {@link MagicSearch.directive:stMagicSearch `stMagicSearch`}       |
   *
   */
  angular
    .module('horizon.framework.widgets.magic-search', ['ui.bootstrap'])
    .constant(
      'horizon.framework.widgets.magic-search.events', {
        TEXT_SEARCH: 'textSearch',
        SEARCH_UPDATED: 'searchUpdated',
        CHECK_FACETS: 'checkFacets',
        FACETS_CHANGED: 'facetsChanged',
        SERVER_SEARCH_UPDATED: 'serverSearchUpdated'
      }
    );

})();
