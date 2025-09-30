// 1. KELAS NODE (Struktur Dasar)
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // 2. KELAS LINKED LIST (Pengelola Node)
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Metode untuk menambahkan data ke akhir list (digunakan dalam konversi)
    append(data) {
      const newNode = new Node(data);
      this.size++;
  
      if (!this.head) {
        this.head = newNode;
        return;
      } 
      
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Metode untuk mencetak list (untuk verifikasi)
    printList() {
      let current = this.head;
      let listString = "";
      while (current) {
        listString += current.data + (current.next ? " -> " : "");
        current = current.next;
      }
      console.log(listString + " -> null");
    }
  }
  
  // 🚀 FUNGSI KONVERSI: Array ke Linked List
  function createListFromArray(inputArray) {
    const newList = new LinkedList();
    
    // Iterasi melalui setiap elemen dalam array
    for (const item of inputArray) {
      // Memanggil metode append untuk menambahkan setiap elemen sebagai Node baru
      newList.append(item); 
    }
    
    return newList; // Mengembalikan objek Linked List yang sudah jadi
  }
  
  // --- CONTOH PENGGUNAAN ---
  const dataArray = ["Apel", "Pisang", "Ceri", "Durian"];
  
  const fruitList = createListFromArray(dataArray);
  
  console.log("Array asli:", dataArray);
  console.log("Hasil konversi:");
  fruitList.printList(); // Output: Apel -> Pisang -> Ceri -> Durian -> null
  
  console.log("Head List:", fruitList.head.data); // Output: Apel
  console.log("Ukuran List:", fruitList.size); // Output: 4