import request from '../utils/request';
import request2 from '../utils/request2';

export function query() {
  return request('/api/users');
}

export async function fakeTest(params) {
	console.log(params);
	return request('/api/test', {
		method: 'POST',
		body: params,
	});
}

export async function fakeTest2(params) {
	console.log(params);
	return request2('/api/test', {
		method: 'POST',
		body: params,
	});
}