#include<stdio.h>
struct Student
{
    char* name;
    int age;
    char sex;
    float score;
};

int main(){
    struct Student p ={"zxc",22,1,99.1};
    struct Student* q =&p;
    printf("%s\n ",p.name);
    printf("%d\n ",p.age);
    printf("%s\n ",q->name);
    printf("%d\n ",q->age);
}