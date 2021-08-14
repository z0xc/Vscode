#include<iostream>
using namespace std;
int main(){
        int a = 10;
        int *p=&a;
        cout<<*p<<endl;
        *p = 20;
        cout<<*p<<endl;
        return 0;
}