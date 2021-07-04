#include<iostream>
#include<thread>
using namespace std;
void hello(){
    std::cout<<"hello concurrent world\n";

}
int main(){
    std::thread exam(hello);
    //exam.join();
}
