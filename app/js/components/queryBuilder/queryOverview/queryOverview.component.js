const template = require('./queryOverview.tpl.html');

const QueryOverviewComponent = {
    template,
    bindings: {
        'removeParam':  '&',
    	'mutationsSet': '<',
    	'diseaseSet':   '<'
    },
    controller: ['$log',function ($log) {
            'ngInject';

            $log = $log.getInstance('QueryOverviewComponent', false);
            $log.log('');

            // const vm = this;

        
    }]
}

export default {
	name: 'queryOverview',
	obj: QueryOverviewComponent
};
