#include<iostream>
#include<algorithm>
#include<vector>
#include<deque>
#include<map>

using namespace std;

int main()
{
    vector<int> v(10);
    int num;
    vector<int>::iterator beg = v.begin();
    vector<int>::iterator end = v.end();
    vector<int>::iterator mid = v.begin() + (end - beg)/2;
    for(int i = 0;i<10;i++)
    {
        v[i] = i;
    }
    cin >> num;
    sort(v.begin(),v.end());
    while(*mid != num && beg < end)
    {
        if(num < *mid)
        {
            end = mid;
        }
        else if(num > *mid)
        {
            beg = mid;
        }
        mid = beg + (end - beg)/2;
    }
    if(*mid == num)
    {
        cout << "Find!";
    }
    else
    {
        cout << "Not Find!";
    }
    return 0;
}