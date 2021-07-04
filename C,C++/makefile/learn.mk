FLAGS = g++ -g -Wall -std=gnu++11
INCLUDE = -I /usr/local/include -I  /usr/include
LIBS = -L /usr/lib -L . -L /usr/lib64/mysql  -lboost_regex  -lmysqlclient -lz
#-lpcre -lz       libSentinelKeys32.a  -lssl
OBJS =   main.o 
all: $(OBJS) printhello
	printhello:
	  $(CFLAGS) -o printhello $(OBJS) $(INCLUDE) $(LIBS)
	    #$(CFLAGS) $(OBJS) $(INCLUDE) $(LIBS)
main.o:main.cpp testsql.h
	  $(CFLAGS) -c $(INCLUDE) $<

install:
	  cp -rf wmbaseinfo.conf /etc
	    cp -rf printhello /usr/sbin

clean:
	  rm -f printhello *.o *.gch *~
