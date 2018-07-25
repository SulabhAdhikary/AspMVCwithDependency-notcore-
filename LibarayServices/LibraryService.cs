using System;
using System.Collections.Generic;
using DataAccessLayer;
using DataAccessLibrary;

namespace LibarayServices
{
    public class LibraryService : IlibraraySevice
    {
        private ILibrarybookDalRepo _dal;
        public LibraryService(ILibrarybookDalRepo dal)
        {
            _dal = dal;
        }

        //public LibraryService()
        //{
        //    _dal = new LibrarybookDalRepo();
        //}

        public IEnumerable<Library_Book> GetLibraryBook(int LibraryId)
        {
            return _dal.GetLibraryBook(LibraryId);
        }

        public void SignoutBook(int librarayBookID, int LibraryId)
        {
            throw new NotImplementedException();
        }
    }
}
