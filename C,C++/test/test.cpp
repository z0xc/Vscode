#include<stdio.h>
#include<iostream>
// extern int externa;
using namespace std;

int main(){
    int a =10;
    int *p = &a;
    *p = 10; 
    printf("%d\n",*p);
    cout<<p<<endl;
    cout<<"char*"<<endl;
    char *c= "zhouxinchi";
    cout<<c<<endl;
    // char *result;
    // result = "zhouxinchi";
    // cout<<result<<endl;
    // result = "zhouxihchi111";
    // cout<<result<<endl; 
    // externa = 10;
    // // char b  = '中';
    // const int aa=1;
    // // aa = 1;

	// string s = "zhouxinchi";
    // char* q = "zhouxinchi";
    // const char* c = "zhouxinchi";
    // char* const b = "zhouxinchi"; 
    // int* a; 
    // *a = 1;
    // int arr[]={1,2,3};
    // printf("%d ",arr[1]);
    // printf("%d\n",*a);
    // printf("%s\n",q);
    // printf("%s\n",q);
    // printf("%x\n",p);
    // printf("%x\n",q);

    // printf("%x\n",a);
    // // printf("%x\n",b);
    // printf("%s",a);
    // // printf("%s",b);
    // cout<<externa<<endl;
    return 0;
}