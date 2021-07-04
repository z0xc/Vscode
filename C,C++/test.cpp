/*
生产者消费者问题
*/
#include <iostream>
#include <deque>
#include <thread>
#include <mutex>
#include <condition_variable>
//#include <Windows.h>
#include <unistd.h>
using namespace std;

deque<int> q;
mutex mu;
condition_variable cond;
int c = 0;//缓冲区的产品个数

void producer() { 
 int data1;
 while (1) {//通过外层循环，能保证生产不停止
  if(c < 3) {//限流
   {
    data1 = rand();
    unique_lock<mutex> locker(mu);//锁
    q.push_front(data1);
    cout << "存了" << data1 << endl;
    cond.notify_one();  // 通知取
    ++c;
   }
   sleep(1);
  }
 }
}

void consumer() {
 int data2;//data用来覆盖存放取的数据
 while (1) {
  {
   unique_lock<mutex> locker(mu);
   while(q.empty())
    cond.wait(locker); //wait()阻塞前先会解锁,解锁后生产者才能获得锁来放产品到缓冲区；生产者notify后，将不再阻塞，且自动又获得了锁。
   data2 = q.back();//取的第一步
   q.pop_back();//取的第二步
   cout << "取了" << data2<<endl;
   --c;
  }
  sleep(1);
 }
}
int main() {
 thread t1(producer);
 thread t2(consumer);
 t1.join();
 t2.join();
 return 0;
}