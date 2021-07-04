#include<iostream>
#include<deque>
#include<thread>
#include<mutex>
#include<condition_variable>
#include<unistd.h>

using namespace std;


void producer()
{
    int data1;
    while(1)
    {
        if(c < 3)
        {
            data1 = rand();
            unique_lock<mutex> locker(mu);
            q.push_front(data1);
            cout << " in " << data1 << endl;
            cond.notify_one();
            ++c;
        }
        sleep(500);
    }
}

void consumer(){
    int data2;
    while(1)
    {
        unique_lock<mutex> locker(mu);
        while(q.empty())
        {
            cond.wait(locker);
        }
    }

}
int main()
{
    thread t1(producer)
}
