public class Shot {
    public static void main(String[] args) {
        Shot m1 = new DoubleShot();
        m1.show();
        m1.show(true); 
        Shot m2 = new Shot();
        m2.show();
    }

    void show(){
        System.out.println("Shot::show()");
    }

    void show(boolean showAll){
        System.out.println("Shot::show(boolean)");
    }

}

class DoubleShot extends Shot {
    void show()
    {
        super.show();
        System.out.println("DoubleShot::show()");
    }
    void show(boolean showAll){
        System.out.println("DoubleShot::show(boolean)");
    }
}