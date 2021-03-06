db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $subtract: [
                "$$NOW",
                "$dataNascimento"
              ]
            },
            {
              $multiply: [8.64e+7, 365]
            }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras"
      }
    }
  },
  {
    $sort: {
      totalCompras: -1
    }
  },
  {
    $limit: 10
  },
  {
    $unwind: "$compras"
  },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $multiply: [
          "$compras.valorTotal",
          0.9
        ]
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      quantidade: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      quantidade: -1
    }
  },
  {
    $limit: 5
  }
]).pretty();
