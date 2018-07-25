using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary
{
    public  class LibrarybookDalRepo : ILibrarybookDalRepo
    {

        private LibraryModel db = new LibraryModel();
        public IEnumerable<Library_Book> GetLibraryBook(int LibraryId)
        {
           var books =   db.Library_Book.Where(t => t.LibraryId == LibraryId).Select(t => t).ToList<Library_Book>();
           return books.AsEnumerable<Library_Book>();
        }

        public void SignoutBook(int librarayBookID, int LibraryId)
        {
            throw new NotImplementedException();
        }
    }
}
 