/* @flow */

import Rx from 'rx';
import WebIDL2 from '@motiz88/webidl2';

export
default
function parseIdlSource(idlSource: string, options): Rx.Observable {
	return Rx.Observable.create(observer => {
		try {
			observer.onNext(WebIDL2.parse(idlSource, options));
		} catch(e) {
			observer.onError(e);
		}
		observer.onCompleted();
	});
}
