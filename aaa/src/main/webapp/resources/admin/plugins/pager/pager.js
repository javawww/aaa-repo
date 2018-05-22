// 分页相关的标签
app.constant('paginationConfig', {
	page : 1,
	records : 1,
	pagesize : 20  //这里决定了后台前端的分页处总共有多少个可以点击的块
});

// 分页自定义插件
app.directive("pager", ["$rootScope", '$parse', 'paginationConfig',
function($rootScope, $parse, paginationConfig) {
	return {
		restrict : "E",
		transclude : true,
		templateUrl : "resources/admin/plugins/pager/pager.html",
		replace : true,
		scope : {
			page : "=", // 当前显示的第几页
			records : "=", // 总记录数
			pagesize : "="// 每页显示的记录数
		},
		link : function(scope, element, attrs, ctrls) {
			var page = angular.isDefined(attrs.page) ? scope.$parent.$eval(attrs.page) : paginationConfig.page;
			var records = angular.isDefined(attrs.records) ? scope.$parent.$eval(attrs.records) : paginationConfig.records;
			var onpagechanged = angular.isDefined(attrs.onpagechanged) ? scope.$parent.$eval(attrs.onpagechanged) : paginationConfig.onpagechanged;

			var pagesize = angular.isDefined(attrs.pageSize) ? scope.$parent.$eval(attrs.pagesize) : paginationConfig.pagesize;

			scope.page = page;
			scope.records = records;
			scope.pagesize = pagesize;
			// 更新分页页码
			function updatePageInfo(_page, _records, _pageSize) {


				if (_records == 0) {
					_records = 1;
				}

				if (!_page || !_records || !_pageSize)
					return;

				var totalPages = _records % _pageSize > 0 ? (_records / _pageSize) + 1 : (_records / _pageSize);

				// 分页
				var options = {
					currentPage : _page,
					totalPages : totalPages,
					onPageChanged : function(e, oldPage, newPage) {
						if (onpagechanged) {
							onpagechanged(newPage, oldPage);
						}
					},
					bootstrapMajorVersion : 3
				};
				$(element).bootstrapPaginator(options);

			}

			// 监控对应属性的变化
			scope.$parent.$watch($parse(attrs.page), function(value) {
				scope.page = value;
				updatePageInfo(scope.page, scope.records, scope.pagesize);
			});

			scope.$parent.$watch($parse(attrs.records), function(value) {
				scope.records = value;
				updatePageInfo(scope.page, scope.records, scope.pagesize);
			});

			scope.$parent.$watch($parse(attrs.pagesize), function(value) {
				if (value) {
					scope.pagesize = value;
					updatePageInfo(scope.page, scope.records, scope.pagesize);
				}
			});

		}	//end of link
	};		//end of return
}]);
