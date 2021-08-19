

#pragma warning (disable:4996)

#include <algorithm>
#include <functional>
#include <numeric>
#include <iostream>
#include <iomanip>
#include <cstdio>
#include <cmath>
#include <complex>
#include <cstdlib>
#include <ctime>
#include <cstring>
#include <cassert>
#include <string>
#include <vector>
#include <list>
#include <map>
#include <set>
#include <deque>
#include <queue>
#include <stack>
#include <bitset>
#include <sstream>
using namespace std;

const long long MOD = 1e9 + 7;
const long long base = 31;
const int MAXN = 1e6 + 60;
long long HashValue[MAXN];

long long HashOfString(string s) {
	long long ans = 0;
	for (int i = 0; i < s.size(); i++) {
		long long tmp;
		if (s[i] == 'A') tmp = 1;
		else if (s[i] == 'C') tmp = 2;
		else if (s[i] == 'G') tmp = 3;
		else tmp = 4;
		ans = (ans * base + tmp) % MOD;
	}
	return ans;
}

long long pow(long long num) {
	if (num == 1) {
		return base;
	}
	if (num == 0) {
		return 1;
	}
	long long tmp = pow(num / 2);
	if (num % 2 == 0) {
		
		return (tmp * tmp) % MOD;
	}
	else {
		return (((tmp * tmp) % MOD) * base) % MOD;
	}
}

long long getHash(int i, int j) {
	return (HashValue[j] - HashValue[i - 1] * pow(1LL * (j - i + 1)) + MOD * MOD) % MOD;
}


int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	int m, n;
	string s;
	cin >> m;
	cin >> s;
	n = s.size();
	long long CurHashValue = 0;
	for (int i = 0; i < s.size(); i++) {
		long long tmp;
		if (s[i] == 'A') tmp = 1;
		else if (s[i] == 'C') tmp = 2;
		else if (s[i] == 'G') tmp = 3;
		else tmp = 4;
		CurHashValue = (CurHashValue * base + tmp) % MOD;
		HashValue[i] = CurHashValue;
	}
	int ans = -1;
	for (int i = 0; i < m; i++) {
		long long SoLanXuatHien = (long long)n / (1LL* i + 1);
		long long tmp = pow((i + 1) * SoLanXuatHien)-1;
		long long tmp2 = pow(i + 1) - 1;
		long long val = HashValue[i];
		long long val2 = HashValue[(i + 1) * SoLanXuatHien - 1];
		long long tmp3 = (tmp * val) % MOD;
		long long tmp4 = (tmp2 * val2) % MOD;
		//cout << tmp3 << " " << tmp4 << "\n";
		if (tmp3 == tmp4) {
			long long PhanDu = getHash((i + 1) * SoLanXuatHien, s.size() - 1);
			int sizePhanDu = s.size() - 1 - (i + 1) * SoLanXuatHien + 1;
			long long PhanThua = getHash(0, sizePhanDu - 1);
			if (PhanThua == PhanDu) {
				ans = i + 1;
				break;
			}

		}
		//cout << tmp << " " << tmp2 << "\n";
	}
	if (ans == -1) {
		cout << "NO\n";
	}
	else {
		cout << ans << "\n";
	}
}
