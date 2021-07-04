#include<fstream>
#include<iostream>
#include<string>
using namespace std;

int main()
{
   // *************************写txt文件*******************************
   //ofstream OutFile;            //实例一个写文件对象
   //OutFile.open("Test1.xlsx");     //创建一个Test.txt文本，并且打开Test.txt文件
   ofstream OutFile("Test.txt"); //利用构造函数创建txt文本，并且打开该文本
   OutFile << "This is a Test!";  //把字符串内容"This is a Test!"，写入Test.txt文件
   OutFile.close();            //关闭Test.txt文件



   // *************************读txt文件*******************************
   ifstream readFile("Test.txt");
   char temp[1024] = {0};
   string s;
   readFile >>s;           //遇到空格输出停止，空格后的内容无法输出，'\0'是截止符，如图3所示
   //readFile.getline(temp, 8， 0);   //可以输出空格，遇到delim符号才截止。 最后一个参数0表示文本框遇到空字符（ASCLL码为32，文本框不可能有空字符）截止符。不加第三个参数0时，表示'\n'为截止符('\n'也是换行符)。如图4所示
   cout <<s<< endl;
   readFile .close();
   system("PAUSE");
   return 0;
}