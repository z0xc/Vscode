#include<stdio.h>
int main(){
    char a[] = "zhouxinchi";

    char* p = a;
    char* q = "zhouxinchi";
    // printf("%s",*q);
    printf("%x\n",p);
    printf("%x\n",q);

    printf("%s",a);


}