main:main.o func1.o func2.o
	gcc -Iinc -o main main.o func1.o func2.o
func1.o:func1.c
	gcc -Iinc -c func1.c
func2.o:func2.c
	gcc -Iinc -c func2.c
main.o:main.c
	gcc -Iinc -c main.c
clean:	
	rm *.o main
