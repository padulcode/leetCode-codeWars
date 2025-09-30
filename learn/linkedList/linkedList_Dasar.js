// 💡 Kelas Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 💡 Kelas LinkedList (dengan metode append sederhana)
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Metode untuk menambahkan data ke akhir list
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }


  printList() {
    let current = this.head; // 1. Mulai dari Head
    let listString = "";

    // 2. Loop selama node 'current' masih ada (tidak null)
    while (current) {
      listString += current.data; 

      // Tambahkan panah jika ini bukan node terakhir
      if (current.next) {
        listString += " -> ";
      }

      // 3. Pindah ke node berikutnya
      current = current.next;
    }

    // Akhiri dengan 'null' untuk menunjukkan akhir list
    console.log(listString + " -> null"); 
  }
}

function createAndReturnList(values) {
  // 1. Buat instance baru dari LinkedList
  const myList = new LinkedList(); 

  // 2. Isi list dengan nilai-nilai dari array
  for (const value of values) {
    myList.append(value);
  }

  // 3. Mengembalikan OBJEK LinkedList yang sudah terisi
  return myList; // Tipe data yang di-return adalah LinkedList
}

// Memanggil fungsi, yang akan mengembalikan Linked List
const resultList = createAndReturnList([1, 5, 9, 12]);

// Anda sekarang dapat mengakses properti dan metode dari objek Linked List
console.log(mylist.printList); // Output: 1 (data dari node pertama)
console.log(resultList.head.next.data); // Output: 5 (data dari node kedua)

