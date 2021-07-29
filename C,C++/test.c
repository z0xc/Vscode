#include<stdio.h>
int main(){
    char a[] = "z";
    // char b  = '中';

    char* p = a;
    char* q = "zhouxinchi";
    // printf("%s",*q);
    printf("%x\n",p);
    printf("%x\n",q);

    printf("%x\n",a);
    // printf("%x\n",b);
    printf("%s",a);
    // printf("%s",b);


}