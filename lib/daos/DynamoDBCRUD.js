import { DynamoDB } from 'aws-sdk';

interface Item {
  [key: string]: any; // Define esto según los atributos de tu ítem
}

class DynamoDBCRUD {
  private docClient: DynamoDB.DocumentClient;
  private tableName: string;

  constructor(tableName: string) {
    this.docClient = new DynamoDB.DocumentClient();
    this.tableName = tableName;
  }

  // Crear un ítem
  async createItem(item: Item): Promise<DynamoDB.DocumentClient.PutItemOutput> {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: this.tableName,
      Item: item,
    };
    return this.docClient.put(params).promise();
  }

  // Leer un ítem por clave primaria
  async getItem(key: DynamoDB.DocumentClient.Key): Promise<DynamoDB.DocumentClient.GetItemOutput> {
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: this.tableName,
      Key: key,
    };
    return this.docClient.get(params).promise();
  }

  // Actualizar un ítem
  async updateItem(key: DynamoDB.DocumentClient.Key, updateExpression: string, expressionAttributeValues: DynamoDB.DocumentClient.ExpressionAttributeValueMap): Promise<DynamoDB.DocumentClient.UpdateItemOutput> {
    const params: DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: this.tableName,
      Key: key,
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'UPDATED_NEW', // Opcional: Devuelve los atributos actualizados
    };
    return this.docClient.update(params).promise();
  }

  // Eliminar un ítem
  async deleteItem(key: DynamoDB.DocumentClient.Key): Promise<DynamoDB.DocumentClient.DeleteItemOutput> {
    const params: DynamoDB.DocumentClient.DeleteItemInput = {
      TableName: this.tableName,
      Key: key,
    };
    return this.docClient.delete(params).promise();
  }
}

export default DynamoDBCRUD;
