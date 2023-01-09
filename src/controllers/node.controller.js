import { getConnection } from "./../database/connection";

const getNodes = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `nodes`");
    resp.json(result);
  } catch (e) {
    resp.status(500);
    resp.send(e.message);
  }
};

const getNode = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `nodes` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    resp.status(500);
    resp.send(e.message);
  }
};

const addNode = async (req, resp) => {
  try {
    const { address_id, details, created_at, updated_at } = req.body;

    // Comprobación de información
    if (
      address_id === undefined ||
      details === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { address_id, details, created_at, updated_at };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `nodes` SET ?", data);
    resp.json(result);
  } catch (e) {
    resp.status(500);
    resp.send(e.message);
  }
};

const updateNode = async (req, resp) => {
  try {
    const { id } = req.params;
    const { address_id, details, created_at, updated_at } = req.body;
    // Comprobación de información
    if (
      address_id === undefined ||
      details === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { address_id, details, created_at, updated_at };
    const connection = await getConnection();
    const result = await connection.query("UPDATE `nodes` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    resp.json(result);
  } catch (e) {
    resp.status(500);
    resp.send(e.message);
  }
};

const deleteNode = async () => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM `nodes` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    resp.status(500);
    resp.send(e.message);
  }
};

export const methods = {
  getNodes,
  getNode,
  addNode,
  updateNode,
  deleteNode,
};