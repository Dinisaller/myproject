﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DAL
{
    public class VacationDAl
    {
        public static List<Vacation>  getVacation()
        {
            using (RacheliandDiniEntities3 db = new RacheliandDiniEntities3())
            {
                return db.Vacations.ToList();
            }

        }
    }
}